import React, { useState } from "react";
import { Form, Button, Modal, Row, Col, ModalFooter } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Tree = () => {
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPassword, setShowPassword] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const togglePasswordVisibility = (modalName) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const handleFieldClick = (e) => {
    e.stopPropagation();
  };

  const boxStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "40px",
    margin: "50px",
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar width="250px" style={{ backgroundColor: "#e7ffce" }}>
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

      <div style={{ flex: 1, marginLeft: "50px", padding: "20px" }}>
        <h1>All Tree Finders</h1>
        <Button variant="primary" onClick={handleShow} className="m-3">
          Add TreeMap
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Register Mapper</Modal.Header>
          <Modal.Body>
            <Form.Control type="Username" placeholder="Name" className="md-1" />
            <Form.Control type="email" placeholder="email" className="md-1" />
            <Form.Control
              type="password"
              placeholder="password"
              className="md-1"
            />
          </Modal.Body>
          <ModalFooter>
            <Button>submit</Button>
          </ModalFooter>
        </Modal>

        <div style={boxStyle}>
          <Row>
            <Col>Name: abc</Col>
            <Col>Mail-id: xyz</Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("modal2")}
              >
                {showPassword.modal2 ? <FiEye /> : <FiEyeOff />}
              </Button>
              {showPassword.modal2 && <span>Password: workkaro</span>}
            </Col>
          </Row>
        </div>

        <div style={boxStyle}>
          <Row>
            <Col>Name:abc</Col>
            <Col>email:abc@gmail.com</Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("modal1")}
              >
                {showPassword.modal1 ? <FiEye /> : <FiEyeOff />}
              </Button>
              {showPassword.modal1 && <span>Password: workkaro</span>}
            </Col>
          </Row>
        </div>

        <div style={boxStyle}>
          <Row>
            <Col>Name:abc</Col>
            <Col>email:abc@gmail.com</Col>
            <Col>
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("modal3")}
              >
                {showPassword.modal3 ? <FiEye /> : <FiEyeOff />}
              </Button>
              {showPassword.modal3 && <span>Password: workkaro</span>}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Tree;

// import React, { useState } from 'react';
// import { Form, Button, Modal, Row, Col, ModalFooter } from 'react-bootstrap';
// import { FiEye, FiEyeOff } from 'react-icons/fi';

// const Tree = () => {
//     const [showForm, setShowForm] = useState(false);
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [showPassword, setShowPassword] = useState({
//         modal1: false,
//         modal2: false,
//         modal3: false,
//     });

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const togglePasswordVisibility = (modalName) => {
//         setShowPassword((prevState) => ({
//             ...prevState,
//             [modalName]: !prevState[modalName],
//         }));
//     };

//     const handleFieldClick = (e) => {
//         e.stopPropagation();
//     };

//     const boxStyle = {
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         padding: '40px',
//         margin: '50px',
//     };

//     return (
//         <>
//             <h1><center>All Tree Finders</center></h1>
//             <Button variant="primary" onClick={handleShow} className='m-3' >
//                 Add TreeMap
//             </Button>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     Register Mapper
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Control type="Username" placeholder="Name" className="md-1" ></Form.Control>
//                     <Form.Control type="email" placeholder="email" className="md-1" ></Form.Control>
//                     <Form.Control type="password" placeholder="password" className="md-1" ></Form.Control>

//                 </Modal.Body>
//                 <ModalFooter><Button>submit</Button></ModalFooter>
//             </Modal>

//             <div style={boxStyle}>

//                 <Row>
//                     <Col>Name: abc</Col>
//                     <Col>Mail-id: xyz</Col>
//                     <Col>
//                         <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('modal2')}>
//                             {showPassword.modal2 ? <FiEye /> : <FiEyeOff />}
//                         </Button>
//                         {showPassword.modal2 && <span>Password: workkaro</span>}
//                     </Col>
//                 </Row>
//             </div>

//             <div style={boxStyle}>
//                 <Row>
//                     <Col>Name:abc</Col>
//                     <Col>email:abc@gmail.com</Col>
//                     <Col> <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('modal1')}>
//                         {showPassword.modal1 ? <FiEye /> : <FiEyeOff />}
//                     </Button>
//                         {showPassword.modal1 && <span>Password: workkaro</span>}</Col>
//                 </Row>

//             </div>

//             <div style={boxStyle}>
//                 <Row>
//                     <Col>Name:abc</Col>
//                     <Col>email:abc@gmail.com</Col>
//                     <Col>
//                         <Button variant="outline-secondary" onClick={() => togglePasswordVisibility('modal3')}>
//                             {showPassword.modal3 ? <FiEye /> : <FiEyeOff />}
//                         </Button>
//                         {showPassword.modal3 && <span>Password: workkaro</span>}
//                     </Col>
//                 </Row>
//             </div>
//         </>
//     );
// };

// export default Tree;
