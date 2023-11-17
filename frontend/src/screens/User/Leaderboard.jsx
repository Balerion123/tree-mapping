import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../constants";
import { getHeader } from "../../utils/GetHeader";
import { Col, Container, Row } from "react-bootstrap";

const Leaderboard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`${backendUrl}/api/v1/user/leaderboard`,
				getHeader()
			);
			console.log(response.data.leaderboard);
			setData(response.data.leaderboard);
		};
		getData();
	}, []);

	return (
		<div className="mx-3 my-5">
			<h1>Leaderboard</h1>
			<Container>
				{data.map((user, index) => {
					return (
						<Row key={index} className="my-4 border-black border-1 border p-3">
							<Col className="col-2">{index + 1}</Col>
							<Col className="col-8">{user.name}</Col>
							<Col>{user.score}</Col>
						</Row>
					);
				})}
			</Container>
		</div>
	);
};

export default Leaderboard;
