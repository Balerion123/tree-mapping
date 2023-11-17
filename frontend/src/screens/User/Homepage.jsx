import React from "react";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { backendUrl } from "../../constants";
import axios from "axios";
import { getHeader } from "../../utils/GetHeader";
import badge from "../../assets/batch.png";
import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Homepage = () => {
  const [trees, setTrees] = useState([]);
  const [allTrees, setAllTrees] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getTrees = async () => {
      const config = getHeader();

      const res = await axios.get(
        `${backendUrl}/api/v1/user/getAllTrees`,
        config
      );
      console.log(res);
      setTrees(res.data.trees);
      setAllTrees(res.data.trees);
    };
    getTrees();
  }, []);

  useEffect(() => {
    const result = allTrees.filter((tree) => {
      return tree.name.includes(text);
    });
    setTrees(result);
  }, [text]);

  return (
    <Container>
      <Row>
        <Col
          className="col-10 w-100 my-3"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={badge} alt="forest" className="w-50 " />
        </Col>
      </Row>
      <Row className="my-5">
        <Col
          className="p-3 m-1 border-black border-1 border "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Trees spotted</div>
          <div>23</div>
        </Col>
        <Col
          className=" p-3 m-1 border-black border-1 border "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Badges earned</div>
          <div>3</div>
        </Col>
      </Row>
      <Row className="my-5 px-3">
        <h1>Find your tree</h1>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            input={<OutlinedInput label="Name" />}
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            {trees.map((tree) => (
              <MenuItem key={tree.name} value={tree.name}>
                {tree.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Row>
      <Row
        className="my-5 px-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={trees[0]?.image} alt="tree" className="w-50 " />
        <h1 className="my-3">Name: {trees[0]?.name}</h1>
        <h3 className="my-3">Scientific Name: {trees[0]?.scientificName}</h3>
        <h3 className="my-3">Facts: {trees[0]?.additionalFacts}</h3>
        <h3 className="my-3">Cultural Importance: {trees[0]?.culturalFacts}</h3>
      </Row>
    </Container>
  );
};

export default Homepage;
