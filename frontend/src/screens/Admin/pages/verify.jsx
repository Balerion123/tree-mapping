import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import VerifyCard from "../components/VerifyCard";
import axios from "axios";
import { MapBoxToken, backendUrl } from "../../../constants";
import mapboxgl from "mapbox-gl";

const VERIFY_TREES = [
  {
    id: "t1",
    imgURL:
      "https://png.pngtree.com/png-clipart/20200224/original/pngtree-small-tree-icon-cartoon-style-png-image_5211944.jpg",
  },
  {
    id: "t2",
    imgURL:
      "https://png.pngtree.com/png-clipart/20200224/original/pngtree-small-tree-icon-cartoon-style-png-image_5211944.jpg",
  },
];

mapboxgl.accessToken = MapBoxToken;

const markerData = [
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

function Verify() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8856, 19.0748], // Coordinates for the point to be displayed
      zoom: 15, // Zoom level
    });

    markerData.map((item) => {
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

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${backendUrl}/api/v1/admin/MappedTrees`);
      setData(res.data.trees);
    };

    getData();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
      <Sidebar style={{ height: "100vh", backgroundColor: "#e7ffce" }}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#b6da9f",
                color: "#b6c8d9",
              },
              "&:hover": {
                backgroundColor: "#d3f0af",
                color: "#f8faf7",
              },
              margin: "10px 0",
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

      <div style={{ marginLeft: "30px" }}>
        <Row
          id="map"
          style={{
            height: "400px",
            width: "80%",
            background: "lightgreen",
            margin: "30px 110px",
          }}
        >
          {/* Add your map component here */}
          <p>This is the map component.</p>
        </Row>

        <Row className="justify-content-center">
          {VERIFY_TREES.map((item) => {
            return (
              <VerifyCard key={item.id} image={item.imgURL} className="mb-3" />
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Verify;

// import React from "react";
// import Row from "react-bootstrap/Row";

// import VerifyCard from "../components/VerifyCard";

// const VERIFY_TREES = [
//   {
//     id: "t1",
//     imgURL:
//       "https://png.pngtree.com/png-clipart/20200224/original/pngtree-small-tree-icon-cartoon-style-png-image_5211944.jpg",
//   },
//   {
//     id: "t2",
//     imgURL:
//       "https://png.pngtree.com/png-clipart/20200224/original/pngtree-small-tree-icon-cartoon-style-png-image_5211944.jpg",
//   },
// ];

// function Verify() {
//   return (
//     <div>
//       <Row
//         style={{
//           height: "400px",
//           width: "80%",
//           background: "lightgreen",
//           margin: "30px 150px",
//         }}
//       >
//         {/* Add your map component here */}
//         <p>This is the map component.</p>
//       </Row>

//       <Row className="justify-content-center">
//         {VERIFY_TREES.map((item) => {
//           return (
//             <VerifyCard key={item.id} image={item.imgURL} className="mb-3" />
//           );
//         })}
//       </Row>
//     </div>
//   );
// }

// export default Verify;
