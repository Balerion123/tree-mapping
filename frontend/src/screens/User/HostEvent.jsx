import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MapBoxToken, backendUrl } from "../../constants";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getHeader } from "../../utils/GetHeader";

mapboxgl.accessToken = MapBoxToken;

const Host = () => {
  const [lng, setLng] = useState(72.8856);
  const [lat, setLat] = useState(19.0748);
  const [newlngLat, setNewlngLat] = useState([0, 0]);
  const [marker, setMarker] = useState(null);

  const [zoom, setZoom] = useState(15);
  const mapContainer = useRef(null);
  const map = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      radius: radius,
      address: "lorem ipsum dolor reddis nam ebbis lorem",
      coordinates: [23.65, 21.54],
      description: "lorem ipsum dolor ressi nabe ebbon lorem deb lsr waand wo",
      date: "2022-07-16T00:00:00Z",
    };

    const config = getHeader();

    const res = await axios.post(
      `${backendUrl}/api/v1/user/createEvent`,
      data,
      config
    );

    console.log(res.data);
    // localStorage.setItem("jwt", res.data.token);
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState("");
  const [radius, setRadius] = useState(0);
  const [address, setAddress] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#d0f0c0",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#556b2f" }}>
        Enter your event details
      </h1>
      <Card style={{ width: "80vw" }}>
        <Card.Body>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Event Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              label="Radius(in kms)"
              variant="outlined"
              fullWidth
            />
            <TextField
              value={address}
              address={(e) => setAddress(e.target.value)}
              label="Address"
              variant="outlined"
              fullWidth
            />
            <div
              id="map"
              ref={mapContainer}
              style={{ width: "100%", aspectRatio: "1/1" }}
            ></div>

            <Button onClick={handleSubmit} fullWidth variant="outlined">
              {" "}
              Submit
            </Button>
          </Box>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Host;
