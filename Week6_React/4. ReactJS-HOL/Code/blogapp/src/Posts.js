import React from "react";
import Post from "./Post";

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			hasError: false,
		};
	}

	loadPosts() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				this.setState({ posts: data });
			})
			.catch((error) => {
				console.log("Error fetching posts: ", error);
				this.setState({ hasError: true });
			});
	}

	render() {
		const { hasError, posts } = this.state;

		if (hasError) {
			return <h1>Something went wrong. Please try again later.</h1>;
		}

		return (
			<div>
				<h1>Posts</h1>
				{posts.map((post) => (
					<Post key={post.id} id={post.id} title={post.title} body={post.body} />
				))}
			</div>
		);
	}

	componentDidMount() {
		this.loadPosts();
	}

	componentDidCatch(error, info) {
		alert("An error occured while fetching the posts");
		console.error("Error ", error, info);
		this.setState({ hasError: true });
	}
}
