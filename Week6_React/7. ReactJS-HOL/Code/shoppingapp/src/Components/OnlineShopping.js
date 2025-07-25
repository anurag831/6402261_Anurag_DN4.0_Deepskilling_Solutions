import React from "react";
import Cart from "./Cart";
import styles from "./Styles.module.css"

export default class OnlineShopping extends React.Component {
	render() {
		const cartInfo = [
			{ itemName: "Laptop", price: 80000 },
			{ itemName: "TV", price: 120000 },
			{ itemName: "Washing Machine", price: 50000 },
			{ itemName: "Mobile", price: 30000 },
			{ itemName: "Fridge", price: 70000 },
		];

		return (
			<div className={styles.mydiv}>
				<h1>Items Ordered : </h1>
				<Cart item={cartInfo} />
			</div>
		);
	}
}
