import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mapboxgl from "mapbox-gl";
import { MapBoxToken, backendUrl } from "../../../constants";
import axios from "axios";
mapboxgl.accessToken = MapBoxToken;

function EventElement(props) {
  const [isExpand, setExpand] = useState(false);

  useEffect(() => {
    console.log(props.item);
  }, []);

  useEffect(() => {
    if (!isExpand) return;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        props.item.location.coordinates[1],
        props.item.location.coordinates[0],
      ], // Coordinates for the point to be displayed
      zoom: 15, // Zoom level
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([
        props.item.location.coordinates[1],
        props.item.location.coordinates[0],
      ]) // Coordinates for the point to be displayed
      .addTo(map);

    return () => {
      map.remove();
    };
  }, [isExpand]);

  function openExpand() {
    setExpand(true);
  }

  function closeExpand() {
    setExpand(false);
  }

  const handleAccept = async () => {
    const res = await axios.patch(
      `${backendUrl}/api/v1/admin/approveEvent/${props.item._id}`
    );
    console.log(res);
    window.location.reload();
  };

  return (
    <Card style={{ margin: "20px" }}>
      <Card.Header>New Event</Card.Header>
      <div className="row">
        <div className="col-md-4">
          <Card.Img
            src="https://picsum.photos/200"
            alt="Event Image"
            style={{ padding: "20px 10px" }}
          />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title style={{ top: "50px" }} className="medium">
              {props.title}
            </Card.Title>
            <Card.Text>{props.description}</Card.Text>

            {isExpand && (
              <div id="map" style={{ height: "200px", width: "500px" }}></div>
            )}

            {!isExpand ? (
              <Button
                onClick={openExpand}
                variant="secondary"
                style={{ margin: "20px" }}
              >
                Open Details
              </Button>
            ) : (
              <Button
                onClick={closeExpand}
                variant="secondary"
                style={{ margin: "20px" }}
              >
                Close Details
              </Button>
            )}

            {isExpand && (
              <Button
                variant="success"
                style={{ margin: "20px" }}
                onClick={handleAccept}
              >
                Accept
              </Button>
            )}

            {isExpand && <Button variant="danger">Reject</Button>}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default EventElement;
