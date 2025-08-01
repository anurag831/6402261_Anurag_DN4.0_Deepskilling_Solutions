import React, { useState } from "react";
import validateForm from "./validate";
import styles from "./Register.module.css";

const Register = () => {
	const [formDetails, setFormDetails] = useState({
		name: "",
		email: "",
		pass: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormDetails((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validateForm(formDetails);
		const msg = [];
		if (errors.name) {
			msg.push(errors.name);
		}
		if (errors.email) {
			msg.push("\n" + errors.email);
		}
		if (errors.pass) {
			msg.push("\n" + errors.pass);
		}
		if (errors.name === null && errors.email === null && errors.pass === null) {
			msg.push("Registered sucessfully");
		}
		alert(msg);
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h2>Register Here !!!</h2>
				<form>
					<div className={styles.inputGroup}>
						<label>
							Name:
							<input
								type="text"
								name="name"
								value={formDetails.name}
								onChange={handleChange}
								className={styles.input}
							/>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<label>
							Email:
							<input
								type="email"
								name="email"
								value={formDetails.email}
								onChange={handleChange}
								className={styles.input}
							/>
						</label>
					</div>
					<div className={styles.inputGroup}>
						<label>
							Password:
							<input
								type="text"
								name="pass"
								value={formDetails.pass}
								onChange={handleChange}
								className={styles.input}
							/>
						</label>
					</div>
					<button onClick={handleSubmit} className={styles.button}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
