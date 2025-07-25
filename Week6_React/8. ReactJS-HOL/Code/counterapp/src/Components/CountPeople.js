import React from "react";
import styles from "./myStyles.module.css"

export default class CountPeople extends React.Component {
	constructor() {
		super();
		this.state = {
			entrycount: 0,
			exitcount: 0,
			c: 0,
		};
	}
	updateEntry() {
		this.setState((prevState, props) => {
			return { entrycount: prevState.entrycount + 1 };
		});
	}
	updateExit() {
		this.setState((prevState, props) => {
			return { exitcount: prevState.exitcount + 1 };
		});
	}
	render() {
		return (
			<div className={styles.CountPeople}>
				<div className={styles.group}>
					<button onClick={() => this.updateEntry()}>Login</button>
					<span>{this.state.entrycount} People entered!!!</span>
				</div>
				<div className={styles.group}>
					<button onClick={() => this.updateExit()}>Logout</button>
					<span>{this.state.exitcount} People exited!!!</span>
				</div>
			</div>
		);
	}
}
