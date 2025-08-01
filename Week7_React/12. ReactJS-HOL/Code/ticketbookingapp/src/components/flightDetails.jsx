import React from "react";
import styles from "./FlightDetails.module.css";

const flights = [
    { id: 1, airline: "Air India", from: "Delhi", to: "Mumbai", time: "10:00 AM" },
    { id: 2, airline: "IndiGo", from: "Bangalore", to: "Chennai", time: "12:30 PM" },
    { id: 3, airline: "SpiceJet", from: "Kolkata", to: "Hyderabad", time: "3:45 PM" },
    { id: 4, airline: "Vistara", from: "Pune", to: "Goa", time: "6:15 PM" },
    { id: 5, airline: "GoAir", from: "Ahmedabad", to: "Jaipur", time: "8:00 AM" },
    { id: 6, airline: "AirAsia", from: "Lucknow", to: "Patna", time: "9:30 AM" },
    { id: 7, airline: "Jet Airways", from: "Delhi", to: "Bangalore", time: "11:45 AM" },
    { id: 8, airline: "TruJet", from: "Chennai", to: "Coimbatore", time: "2:00 PM" },
    { id: 9, airline: "Alliance Air", from: "Mumbai", to: "Nagpur", time: "4:30 PM" },
    { id: 10, airline: "Star Air", from: "Hyderabad", to: "Vizag", time: "7:00 PM" },
    { id: 11, airline: "Air Costa", from: "Goa", to: "Delhi", time: "8:45 PM" },
    { id: 12, airline: "Zoom Air", from: "Jaipur", to: "Kolkata", time: "10:15 PM" },
];

const flightDetails = () => {
	return (
		<div className={styles.flightsContainer}>
			{flights.map((flight) => (
				<div key={flight.id} className={styles.flightCard}>
					<h3 className={styles.airlineName}>{flight.airline}</h3>
					<p className={styles.flightInfo}>
						<strong>From:</strong> {flight.from}
					</p>
					<p className={styles.flightInfo}>
						<strong>To:</strong> {flight.to}
					</p>
					<p className={styles.flightInfo}>
						<strong>Time:</strong> {flight.time}
					</p>
				</div>
			))}
		</div>
	);
};

export default flightDetails;
