import React, { useRef } from "react";
import useFetch from "./use-Fetch";
import { Button, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Home.css";
import City from "./City";

const Home = () => {
	const { loading, error, data, fetchData, setError } = useFetch();

	const inputRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const city = inputRef.current.value;
		await fetchData(city);
		e.target.reset();
	};

	return (
		<section className="background">
			<div className="container">
				<form onSubmit={handleSubmit}>
					{error && (
						<Alert
							severity="error"
							className="centered"
							sx={{ mb: "0.9rem" }}
							onClose={() => setError("")}
						>
							{error}
						</Alert>
					)}
					<TextField
						inputRef={inputRef}
						id="city-input"
						label="Enter your City"
						type="text"
						sx={{ width: "80%" }}
					/>
					<Button variant="contained" sx={{ marginTop: 3 }} type="submit">
						{!loading ? "Find" : "Loading..."}
					</Button>
				</form>
			</div>
			<div className="main-weather">
				{data && (
					<City
						description={data
							.getElementsByTagName("weather")[0]
							.getAttribute("value")}
					/>
				)}
			</div>
		</section>
	);
};

export default Home;
