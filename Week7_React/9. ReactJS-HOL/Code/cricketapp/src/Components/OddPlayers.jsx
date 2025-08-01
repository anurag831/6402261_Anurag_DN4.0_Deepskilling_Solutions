import React from "react";

const OddPlayers = ({ IndianTeam }) => {
	const [first, , third, , fifth] = IndianTeam;
	return (
		<div>
			<ul>
				<li>First: {first}</li>
				<li>Third: {third}</li>
				<li>Fifth: {fifth}</li>
			</ul>
		</div>
	);
};

export default OddPlayers;
