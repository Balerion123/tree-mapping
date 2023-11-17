import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllEventElement(props) {
  return (
    <Card style={{ margin: "20px" }}>
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
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="secondary" style={{ margin: "20px" }}>
              Open details
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default AllEventElement;
