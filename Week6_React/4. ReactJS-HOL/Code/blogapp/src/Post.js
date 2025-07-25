import React from "react";

class Post extends React.Component {
	constructor({ id, title, body }) {
		super({ id, title, body });
		this.id = id;
		this.title = title;
		this.body = body;
	}

	render() {
		return (
			<div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
				<h2>{this.title}</h2>
				<p>{this.body}</p>
			</div>
		);
	}
}

export default Post;
