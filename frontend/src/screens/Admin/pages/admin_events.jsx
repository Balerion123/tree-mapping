import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import AllEventElement from "../components/AllEvent";
import EventElement from "../components/EventElement";
import axios from "axios";
import { backendUrl } from "../../../constants";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

function AdminEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${backendUrl}/api/v1/admin/getAllEvents`);
      setAllEvents(res.data.events);
      console.log(res);

      const res2 = await axios.get(
        `${backendUrl}/api/v1/admin/getPendingEvents`
      );
      setUpcomingEvents(res2.data.events);
      console.log(res2);
    };

    getData();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
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

        <div>
          <h1 style={{ margin: "20px" }}>Accept Events</h1>
          {upcomingEvents.map((item) => {
            return (
              <EventElement
                key={item.id}
                title={item.name}
                description={item.description}
                isApproved={true}
                item={item}
              />
            );
          })}

          <hr />

          <h1 style={{ margin: "20px" }}>All Events</h1>
          <Row>
            {allEvents.map((item) => (
              <Col key={item.id} md={6}>
                <AllEventElement
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  isApproved={item.isApproved}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AdminEvents;

// import React, { useEffect, useState } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import AllEventElement from "../components/AllEvent";
// import EventElement from "../components/EventElement";
// import axios from "axios";
// import { backendUrl } from "../../../constants";

// function AdminEvents() {
// 	const [upcomingEvents, setUpcomingEvents] = useState([]);
// 	const [allEvents, setAllEvents] = useState([]);

// 	useEffect(() => {
// 		const getData = async () => {
// 			const res = await axios.get(`${backendUrl}/api/v1/admin/getAllEvents`);
// 			setAllEvents(res.data.events);
// 			console.log(res);

// 			const res2 = await axios.get(
// 				`${backendUrl}/api/v1/admin/getPendingEvents`
// 			);
// 			setUpcomingEvents(res2.data.events);
// 			console.log(res2);
// 		};

// 		getData();
// 	}, []);

// 	return (
// 		<div>
// 			<h1 style={{ margin: "20px" }}>Accept Events</h1>
// 			{upcomingEvents.map((item) => {
// 				return (
// 					<EventElement
// 						key={item.id}
// 						title={item.name}
// 						description={item.description}
// 						imageSrc={item.image}
// 						isApproved={true}
// 						item={item}
// 					/>
// 				);
// 			})}

// 			<hr></hr>

// 			<h1 style={{ margin: "20px" }}>All Events</h1>
// 			<Row>
// 				{allEvents.map((item) => (
// 					<Col key={item.id} md={6}>
// 						<AllEventElement
// 							title={item.title}
// 							description={item.description}
// 							isApproved={item.isApproved}
// 							image={item.img}
// 						/>
// 					</Col>
// 				))}
// 			</Row>
// 		</div>
// 	);
// }

// export default AdminEvents;
