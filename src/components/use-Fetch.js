import React, { useState, useEffect } from "react";

const openWeatherApiKey = "c26a51eff6927b6ac2a511d7799de1b7";

const useFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState("");

	const fetchData = async (city) => {
		if (city.length === 0) {
			setError("Please enter your city!");
			return;
		}

		setLoading(true);

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&mode=xml`
			);

			if (response.status === 404) {
				throw Error(`City ${response.statusText}`);
			}

			if (!response.ok) {
				throw Error("Something went wrong! Please try again");
			}

			const result = await response.text();

			let parser = new DOMParser();
			let xmlDoc = parser.parseFromString(result, "text/xml");

			setLoading(false);
			setData(xmlDoc);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};
	return { loading, error, data, fetchData, setError };
};

export default useFetch;
