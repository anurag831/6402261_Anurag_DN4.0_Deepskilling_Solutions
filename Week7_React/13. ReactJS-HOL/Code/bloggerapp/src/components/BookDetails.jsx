import React from "react";

const books = [
	{ name: "Learning React", price: "$30" },
	{ name: "JavaScript: The Good Parts", price: "$25" },
	{ name: "CSS Secrets", price: "$28" },
];

const BookDetails = () => {
	return (
		<div className="book-details">
			<h2>Book Details</h2>
			<ul className="book-list">
				{books.map((book, idx) => (
					<li key={idx} className="book-item">
						<div className="book-name">{book.name}</div>
						<div className="book-price">{book.price}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookDetails;
