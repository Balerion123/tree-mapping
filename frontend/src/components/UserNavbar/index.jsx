import classes from "./index.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdLeaderboard, MdCameraAlt, MdEvent, MdHome } from "react-icons/md";

const UserNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        className="w-100 py-3"
        style={{
          backgroundColor: "black",
          // height: "50px",
          color: "white",
        }}
      >
        <Row className="align-content-center">
          <Col>
            <Button
              style={{ backgroundColor: "88BD9C" }}
              onClick={() => navigate("/")}
            >
              <MdHome />
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "88BD9C" }}
              onClick={() => navigate("/leaderboard")}
            >
              <MdLeaderboard />
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "88BD9C" }}
              onClick={() => navigate("/treetag")}
            >
              <MdCameraAlt />
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "88BD9C" }}
              onClick={() => navigate("/event")}
            >
              <MdEvent />
            </Button>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default UserNavbar;
