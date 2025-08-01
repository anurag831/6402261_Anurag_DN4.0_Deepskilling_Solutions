import React from "react";

const ListOfPlayers = ({ players }) => {
	return (
		<div>
			<ul>
				{players.map((player, index) => (
					<li key={index}>
						Mr. {player.name} <span>{player.score}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListOfPlayers;
