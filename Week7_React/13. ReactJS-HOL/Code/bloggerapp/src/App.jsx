import React from "react";
import "./App.css";
import BlogDetails from "./components/BlogDetails";
import BookDetails from "./components/BookDetails";
import CourseDetails from "./components/CourseDetails";
function App() {
	return (
		<div className="App">
			<div className="components-container">
				<div className="component-wrapper">
					<CourseDetails />
				</div>
				<div className="component-wrapper">
					<BookDetails />
				</div>
				<div className="component-wrapper">
					<BlogDetails />
				</div>
			</div>
		</div>
	);
}

export default App;
