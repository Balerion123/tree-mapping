import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";

import BarGraph from "../components/BarGraph";
import SideGraph from "../components/SideChart";
import PieGraph from "../components/PieChart";
import { MapBoxToken } from "../../../constants";

mapboxgl.accessToken = MapBoxToken;

const data = [
  [72.8874, 19.0757],
  [72.8869, 19.0749],
  [72.8881, 19.0764],
  [72.8872, 19.0752],
  [72.8884, 19.0772],
  [72.8877, 19.0759],
  [72.8868, 19.0766],
  [72.8886, 19.0761],
  [72.8871, 19.0754],
  [72.8867, 19.077],
  [72.8879, 19.0763],
  [72.8883, 19.0767],
  [72.8875, 19.076],
  [72.8885, 19.0755],
  [72.8869, 19.0768],
  [72.8876, 19.0772],
  [72.8882, 19.0753],
  [72.8868, 19.076],
  [72.8877, 19.0773],
  [72.8886, 19.0767],
];
function Dash() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8856, 19.0748], // Coordinates for the point to be displayed
      zoom: 15, // Zoom level
    });

    data.map((item) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([item[0], item[1]]) // Coordinates for the point to be displayed
        .addTo(map);
    });

    // const marker = new mapboxgl.Marker()
    // 	.setLngLat([72.8856, 19.0748]) // Coordinates for the point to be displayed
    // 	.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar style={{ height: "100vh", backgroundColor: "#e7ffce" }}>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#b6da9f",
                color: "#b6c8d9",
              },
              "&:hover": {
                backgroundColor: "#d3f0af",
                color: "#f8faf7",
              },
              margin: "10px 0", // add margin between menu items
            },
          }}
        >
          <MenuItem
            component={<Link to="/admin/dash" />}
            style={{ fontSize: "20px" }}
          >
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/event" />}
            style={{ fontSize: "20px" }}
          >
            Events
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/verify" />}
            style={{ fontSize: "20px" }}
          >
            Verify
          </MenuItem>
          <MenuItem
            component={<Link to="/admin/treemappers" />}
            style={{ fontSize: "20px" }}
          >
            Tree Finder
          </MenuItem>
        </Menu>
      </Sidebar>

      <Container fluid>
        <Row>
          <Col sm={6}>
            {/* First column with graph */}
            <div
              style={{
                height: "300px",
                backgroundColor: "#d0f0c0",
                margin: "10px",
              }}
            >
              <BarGraph />
            </div>
          </Col>
          <Col sm={6}>
            {/* Second column with graph */}
            <div
              style={{
                height: "300px",
                backgroundColor: "#d0f0c0",
                margin: "10px",
              }}
            >
              <SideGraph />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            {/* Big map */}
            <div
              style={{
                height: "500px",
                backgroundColor: "lightgray",
                margin: "10px",
              }}
              id="map"
            >
              Big Map
            </div>
          </Col>
          <Col sm={4}>
            {/* Side column for graph */}
            <div
              style={{
                height: "500px",
                backgroundColor: "#d0f0c0",
                margin: "10px",
                overflow: "hidden",
              }}
            >
              <PieGraph />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dash;

// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link } from "react-router-dom";

// function Dash() {
//   return (
//     <Sidebar style={{ height: "100vh" }}>
//       <Menu
//         menuItemStyles={{
//           button: {
//             // the active class will be added automatically by react router
//             // so we can use it to style the active menu item
//             [`&.active`]: {
//               backgroundColor: "#13395e",
//               color: "#b6c8d9",
//             },
//           },
//         }}
//       >
//         <MenuItem component={<Link to="/admin/dash" />}> Home</MenuItem>
//         <MenuItem component={<Link to="/admin/event" />}> Events</MenuItem>
//         <MenuItem component={<Link to="/admin/dash" />}>Tree finder</MenuItem>
//       </Menu>
//     </Sidebar>
//   );
// }

// export default Dash;
