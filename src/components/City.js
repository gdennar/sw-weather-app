import { Card } from "@mui/material";
import React from "react";
import "./City.css";

const City = (props) => {
	return (
		<>
			<Card className="description">
				<div className="description-info">{props.description}</div>
			</Card>
		</>
	);
};

export default City;
