import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import TrainerList from "./Components/TrainerList";
import trainersMock from "./TrainersMock";
import TrainerDetails from "./Components/TrainerDetails";

function App() {
	return (
		<div className="App">
			<h1>My Academy Trainers App</h1>
			<BrowserRouter>
				<nav>
					<span>
						<Link to="/">Home</Link>
					</span>
					<span> | </span>
					<span>
						<Link to="/trainers">Show Trainers</Link>
					</span>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/trainers" element={<TrainerList trainers={trainersMock} />} />
					<Route path="/trainerDetails/:trainerId" element={<TrainerDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
