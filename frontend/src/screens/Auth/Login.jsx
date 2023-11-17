import { useRef } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const res = await axios.post(`${backendUrl}/api/v1/auth/login`, data);

    console.log(res.data.token);
    localStorage.setItem("jwt", res.data.token);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

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
      <h1 style={{ marginBottom: "20px", color: "#556b2f" }}>Login here!</h1>
      <Card style={{ width: "500px" }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                ref={passwordRef}
              />
            </Form.Group>
            <Button variant="success" type="submit" style={{ margin: "15px" }}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

// import { useRef } from "react";
// import axios from "axios";
// import { backendUrl } from "../../constants";

// const Login = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       email: emailRef.current.value,
//       password: passwordRef.current.value,
//     };

//     const res = await axios.post(`${backendUrl}/api/v1/auth/login`, data);

//     console.log(res.data.token);
//     localStorage.setItem("jwt", res.data.token);
//   };

//   const emailRef = useRef();
//   const passwordRef = useRef();

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Email" type="email" ref={emailRef} />
//       <input placeholder="Password" ref={passwordRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Login;
