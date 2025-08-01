import axios from "axios";
import React, { useEffect, useState } from "react";

const Getuser = () => {
	const [userDetails, setUserDetails] = useState({
		name: "",
		image: "",
	});

	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get("https://api.randomuser.me/");
			const name = response.data.results[0].name;
			const newUserDetails = {
				name: name.title + " " + name.first + " " + name.last,
				image: response.data.results[0].picture.large,
			};
			setUserDetails(newUserDetails);
			console.log(newUserDetails);
		};
		fetch();
	}, []);

	return (
		<div>
			{userDetails.name != "" ? (
				<>
					<h2>{userDetails.name}</h2>
					<img src={userDetails.image} alt="image" />
				</>
			) : (
				<>
					<h2>Loading</h2>
				</>
			)}
		</div>
	);
};

export default Getuser;
