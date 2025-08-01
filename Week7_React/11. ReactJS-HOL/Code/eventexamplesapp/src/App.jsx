import styles from "./App.module.css";
import React, { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [amount, setAmount] = useState("");
	const handleIncrement = (e) => {
		setCounter(counter + 1);
		alert("Hello! Member1");
	};
	const handlePress = (e) => {
		e.preventDefault();
		const newAmount = parseFloat(amount) * 100.53;
		alert("Converting Euro amount to Rupee is " + newAmount.toFixed(4) + " Rupees");
	};

	return (
		<div className="App">
			<div className={styles.buttons}>
				<div>{counter}</div>
				<button onClick={handleIncrement}>Increment</button>
				<button onClick={() => setCounter(counter - 1)}>Decrement</button>
				<button onClick={() => alert("Welcome!")}>Say Welcome</button>
				<button onClick={() => alert("I was Clicked!")}>Click on me</button>
			</div>

			<div className={styles.form}>
				<h1>Currency Convertor!!!</h1>
				<div className={styles.formContainer}>
					<div className={styles.inputWrapper}>
						<label htmlFor="amount">Amount:</label>
						<input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
					</div>
					<div className={styles.inputWrapper}>
						<label htmlFor="currency">Currency:</label>
						<textarea id="currency" />
					</div>
					<div className={styles.submit}>
						<button onClick={handlePress}>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
