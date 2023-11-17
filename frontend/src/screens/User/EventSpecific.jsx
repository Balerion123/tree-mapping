import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHeader } from "../../utils/GetHeader";
import axios from "axios";
import { MapBoxToken, backendUrl } from "../../constants";
import mapboxgl from "mapbox-gl";
import { Col, Container, Row } from "react-bootstrap";

mapboxgl.accessToken = MapBoxToken;

const EventSpecific = () => {
  const { eventID } = useParams();
  console.log("Specific Event page");
  console.log(eventID);
  let map = null;

  const [data, setData] = useState({});

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8856, 19.0748], // Coordinates for the point to be displayed
      zoom: 15, // Zoom level
    });

    // const marker = new mapboxgl.Marker()
    // 	.setLngLat([72.8856, 19.0748]) // Coordinates for the point to be displayed
    // 	.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    const config = getHeader();
    const getMappedTreesByEventID = async () => {
      const res = await axios.get(
        `${backendUrl}/api/v1/user/getEvent?eventID=${eventID}`,
        config
      );

      console.log(res.data.event);
      setData(res.data.event);

      const data = {
        coordinates: {
          x: res.data.event.location.coordinates[0],
          y: res.data.event.location.coordinates[1],
        },
      };

      const response = await axios.post(
        `${backendUrl}/api/v1/user/getMappedTrees`,
        data,
        config
      );
      console.log(response.data.mappedTrees);

      const mappedTrees = response.data.mappedTrees;
      mappedTrees.map((item) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([
            item.location.coordinates[0],
            item.location.coordinates[1],
          ])
          .addTo(map);
      });
    };

    getMappedTreesByEventID();
  }, [eventID]);

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="my-4"
      >
        <div id="map" style={{ width: "75vw", height: "40vh" }}></div>
      </Row>
      <Row>
        <h2>Name: {data?.name}</h2>
        <h4>Description: {data?.description}</h4>
      </Row>
      <Row
        style={{
          display: "flex",
          textSize: "1rem",
          justifyContent: "left",
          marginLeft: "0.15rem",
          alignItems: "center",
        }}
      >
        Radius: {data?.radius}
      </Row>
    </Container>
  );
};

export default EventSpecific;
