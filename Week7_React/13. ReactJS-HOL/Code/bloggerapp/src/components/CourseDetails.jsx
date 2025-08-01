import React from "react";

const courses = [
	{ name: "React Basics", date: "2024-06-01" },
	{ name: "Advanced JavaScript", date: "2024-06-05" },
	{ name: "Web Design Fundamentals", date: "2024-06-10" },
];

const CourseDetails = () => {
	return (
		<div className="course-details">
			<h2>Course Details</h2>
			<ul className="course-list">
				{courses.map((course, idx) => (
					<li key={idx} className="course-item">
						<div className="course-name">{course.name}</div>
						<div className="course-date">{course.date}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseDetails;
