import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function VerifyCard(props) {
  return (
    <Card
      style={{
        height: "100px",
        margin: "20px",
        padding: "10px",
        width: "80%",
      }}
    >
      <div className="row no-gutters align-items-center">
        <div className="col-md-4">
          <Card.Img
            src={props.image}
            alt="Card Image"
            style={{ height: "70px", width: "70px", marginLeft: "5px" }}
          />
        </div>

        <div className="col-md-8">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>Card Title</Card.Title>
              </div>
              <div>
                <Button variant="success" style={{ margin: "10px" }}>
                  ACCEPT
                </Button>
                <Button variant="danger" style={{ margin: "10px" }}>
                  REJECT
                </Button>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default VerifyCard;

// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// function VerifyCard(props) {
//   return (
//     <Card
//       style={{
//         height: "100px",
//         margin: "20px",
//         padding: "10px",
//         width: "80%",
//       }}
//     >
//       <div className="row no-gutters">
//         <div className="col-md-4">
//           <Card.Img
//             src={props.image}
//             alt="Card Image"
//             style={{ height: "70px", width: "70px" }}
//           />
//           <Card.Title>Card Title</Card.Title>
//         </div>

//         <div className="col-md-8">
//           <Card.Body>
//             {/* <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text> */}
//             <div className="d-flex justify-content-end">
//               <Button variant="success" style={{ margin: "10px" }}>
//                 ACCEPT
//               </Button>
//               <Button variant="danger" style={{ margin: "10px" }}>
//                 REJECT
//               </Button>
//             </div>
//           </Card.Body>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default VerifyCard;
