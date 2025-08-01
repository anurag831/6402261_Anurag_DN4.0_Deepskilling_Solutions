import React, { useState } from "react";
import styles from "./ComplaintRegister.module.css";

const ComplaintRegister = () => {
	const [formDetails, setFormDetails] = useState({
		name: "",
		complaint: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormDetails((prevDetails) => ({
			...prevDetails,
			[name]: value,
		}));
	};

	const generateReferenceNumber = () => {
		const time = new Date(Date.now()).getMonth().toString().padStart(2, '0');
		const randomNum = Math.floor(Math.random() * 1000);
		return `REF-${time}-${randomNum}`;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formDetails.name.trim() || !formDetails.complaint.trim()) {
			alert("Please fill in both employee name and complaint details.");
			return;
		}

		const referenceNumber = generateReferenceNumber();
		alert(
			`Complaint submitted successfully!\nReference Number: ${referenceNumber}\nPlease save this reference number for future follow-ups.`
		);

		setFormDetails({
			name: "",
			complaint: "",
		});
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Register your complaints here!!!</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label htmlFor="employeeName" className={styles.label}>
						Employee Name:
					</label>
					<input
						type="text"
						id="employeeName"
						name="name"
						value={formDetails.name}
						onChange={handleChange}
						placeholder="Enter employee name"
						className={styles.input}
					/>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="complaint" className={styles.label}>
						Complaint:
					</label>
					<textarea
						id="complaint"
						name="complaint"
						value={formDetails.complaint}
						onChange={handleChange}
						placeholder="Enter your complaint details"
						rows="6"
						className={styles.textarea}
					/>
				</div>

				<button type="submit" className={styles.submitButton}>
					Submit Complaint
				</button>
			</form>
		</div>
	);
};

export default ComplaintRegister;
