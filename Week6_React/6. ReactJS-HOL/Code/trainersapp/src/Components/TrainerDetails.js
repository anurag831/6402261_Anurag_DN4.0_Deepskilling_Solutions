import React from "react";
import { useParams } from "react-router-dom";
import trainersMock from "../TrainersMock";

const TrainerDetails = () => {
	const { trainerId } = useParams();
	const details = trainersMock.filter((t) => t.trainerId === trainerId)[0];
	return (
		<div>
			<h2>Trainer Details</h2>
			{details ? (
				<div>
					<h3>
						{details.name} ({details.technology})
					</h3>
					<p>{details.email}</p>
					<p>{details.phone}</p>
					<ul>
						{details.skills.map((s) => {
							return <li key={s}>{s}</li>;
						})}
					</ul>
				</div>
			) : (
				<p>Trainer not found</p>
			)}
		</div>
	);
};

export default TrainerDetails;
