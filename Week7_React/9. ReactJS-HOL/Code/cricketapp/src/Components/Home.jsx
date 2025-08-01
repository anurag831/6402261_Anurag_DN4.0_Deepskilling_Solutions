import React from "react";
import ListOfPlayers from "./ListOfPlayers";
import ScoreBelow70 from "./ScoreBelow70";
import { players } from "../Utils/players";
import { IndianTeam } from "../Utils/players";
import { IndianPlayers } from "../Utils/players";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListOfIndianPlayers from "./ListOfIndianPlayers";

const Home = () => {
	var [flag, setFlag] = React.useState(true);
	if (flag === true) {
		return (
			<div>
				<button onClick={() => setFlag(!flag)}>Toggle</button>
				<p>Flag : True</p>
				<h1> List of Players</h1>
				<ListOfPlayers players={players} />
				<hr />
				<h1> List of Player having Score less than 70 </h1>
				<ScoreBelow70 players={players} />
			</div>
		);
	} else {
		return (
			<div>
				<button onClick={() => setFlag(!flag)}>Toggle</button>
				<p>Flag : False</p>
				<div>
					{/* <h1>Indian Team</h1> */}
					<h1>Odd Players</h1>
					<OddPlayers IndianTeam={IndianTeam} />
					<hr />
					<h1>Even Players</h1>
					<EvenPlayers IndianTeam={IndianTeam} />
				</div>
				<hr />
				<div>
					<h1>List of Indian PLayers merged</h1>
					<ListOfIndianPlayers IndianPlayers={IndianPlayers} />
				</div>
			</div>
		);
	}
};

export default Home;
