import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapBoxToken, backendUrl } from "../../constants";
import "./TreeTag.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { getHeader } from "../../utils/GetHeader";

mapboxgl.accessToken = MapBoxToken;

const Treetag = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(72.8856);
  const [lat, setLat] = useState(19.0748);
  const [zoom, setZoom] = useState(15);
  const [marker, setMarker] = useState(null);
  const [text, setText] = useState("");
  const [newlngLat, setNewlngLat] = useState(null);
  const [image, setImage] = useState(null);
  const [tree, setTree] = useState([]);
  const [toVerify, setToVerify] = useState(true);
  const [chooseTree, setChooseTree] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [selectedTree, setSelectedTree] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLng(longitude);
          setLat(latitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    if (marker) {
      marker.remove();
    }

    map.current.on("click", (e) => {
      const newMarker = new mapboxgl.Marker()
        .setLngLat(e.lngLat)
        .addTo(map.current);
      setNewlngLat({ lat: e.lngLat.lat, long: e.lngLat.lng });
      setMarker(newMarker);
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on("move", () => {
      const center = map.current.getCenter();
      setLng(Number(center.lng.toFixed(4)));
      setLat(Number(center.lat.toFixed(4)));
      setZoom(Number(map.current.getZoom().toFixed(2)));
    });
  });

  useEffect(() => {
    const getTrees = async () => {
      const config = getHeader();

      const res = await axios.get(
        `${backendUrl}/api/v1/user/getAllTrees`,
        config
      );
      console.log(res.data.trees);
      setTree(res.data.trees);
    };
    getTrees();
  }, []);

  const handleSubmit = async () => {
    const config = getHeader();
    console.log(text);

    const data = {
      treeID: text,
      coordinates: [32.43, 61, 23],
      quantity: 12,
      image,
    };

    const res = await axios.post(
      `${backendUrl}/api/v1/user/tagTree`,
      data,
      config
    );

    if (res.data.status === "success") setIsSuccessful(true);

    console.log(res.data);
  };

  return (
    <div>
      <Container className="px-5">
        <Row>
          <div
            ref={mapContainer}
            className="map-container"
            style={{
              height: "100vh !important",
            }}
          />
        </Row>
        <Row className="my-3">
          <Col className="col-3">Image</Col>
          <Col>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Form.Check
            type="switch"
            label="Ask Admin to verify"
            value={toVerify}
            onChange={() => setToVerify((prev) => !prev)}
          />
        </Row>
        {!toVerify && (
          <>
            <Row></Row>
          </>
        )}
        <Row>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              value={text}
              onChange={(e) => setText(e.target.value)}
            >
              {tree.map((tree) => (
                <MenuItem key={tree.name} value={tree._id}>
                  {tree.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            type="file"
            name="file"
            id="file"
            accept=".jpg, .jpeg, .png, .pdf"
            style={{ marginBottom: "1rem" }}
          />
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Row>
      </Container>
      {isSuccessful && <p style={{ textAlign: "center" }}>Successful</p>}
    </div>
  );
};

export default Treetag;
