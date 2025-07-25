import React from "react";
import "./Styles.module.css"

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{this.props.item && this.props.item.length > 0 ? (
						this.props.item.map((item, i) => {
							return (
								<tr key={i}>
									<td>{item.itemName}</td>
									<td>{item.price}</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td colSpan="2">No items in cart</td>
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}
