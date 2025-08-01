import React from "react";
import FlightDetails from "../components/flightDetails";
import styles from "./Home.module.css";

const Home = ({ logout }) => {
	return (
		<div className={styles.homeContainer}>
			<h2 className={styles.homeTitle}>Welcome back</h2>
			<FlightDetails />
			<button className={styles.logoutButton} onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default Home;
