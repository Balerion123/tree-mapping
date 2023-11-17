import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { backendUrl } from "../../constants";
import { getHeader } from "../../utils/GetHeader";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [data, setData] = useState([]);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoordinates({ x: longitude, y: latitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(
        `${backendUrl}/api/v1/user/findAllEvents`,
        { coordinates },
        getHeader()
      );
      console.log(response.data.events);
      setData(response.data.events);
    };
    getData();
  }, []);

  const RouterHost = useNavigate();

  const handleHostClick = () => {
    RouterHost(`/event/host`);
  };

  const Router = useNavigate();

  const handleCardClick = (eventId) => {
    Router(`/event/${eventId}`);
  };

  return (
    <Container>
      <div>
        <h1>Event</h1>
        <form className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          <button type="Host your own event" onClick={handleHostClick}>
            Host
          </button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <Row>
            {data.map((event) => (
              <Col key={event.id} md={4}>
                <Card
                  style={{ marginBottom: "10px" }}
                  onClick={() => handleCardClick(event._id)}
                >
                  <Card.Img variant="top" src={event.imageUrl} />
                  <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <Card.Text>{event.radius}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Event;

// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { backendUrl } from "../../constants";
// import { getHeader } from "../../utils/GetHeader";
// import axios from "axios";
// import Card from "react-bootstrap/Card";

// const Event = () => {
//   const [data, setData] = useState([]);
//   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         setCoordinates({ x: longitude, y: latitude });
//       },
//       (error) => {
//         console.error("Error getting user location:", error);
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.post(
//         `${backendUrl}/api/v1/user/findAllEvents`,
//         { coordinates },
//         getHeader()
//       );
//       console.log(response.data.events);
//       setData(response.data.events);
//     };
//     getData();
//   }, []);

//   return (
//     <Container>
//       <div>
//         <h1>Event</h1>
//         <form className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//           <button type="Host your own event">Search</button>
//         </form>
//         <div style={{ marginTop: "10px" }}>
//           <Card style={{ width: "18rem" }}>
//             <Card.Img
//               variant="top"
//               src="https://static.vecteezy.com/system/resources/thumbnails/008/132/083/small/green-tree-cartoon-isolated-on-white-background-illustration-of-green-tree-cartoon-free-vector.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Event;
