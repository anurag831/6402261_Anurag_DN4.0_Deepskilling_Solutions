import React from "react";
import { Link } from "react-router-dom";

const TrainerList = ({ trainers }) => {
	return (
		<div>
			<h2>Trainer List</h2>
			<ul>
				{trainers.map((trainer) => (
					<li key={trainer.trainerId}>
						<Link to={`/trainerDetails/${trainer.trainerId}`}>{trainer.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrainerList;
