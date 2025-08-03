import { useState } from "react";
import "./App.css";
import { EmployeesData } from "./Employee";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";

function App() {
	const [theme, setTheme] = useState("light");
	const Employees = EmployeesData;
	return (
		<ThemeContext.Provider value={ theme }>
			<div>
				<label>SELECT A THEME </label>
				<select onChange={(e) => setTheme(e.target.value)}>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</div>
			<EmployeesList employees={Employees} />
		</ThemeContext.Provider>
	);
}

export default App;
