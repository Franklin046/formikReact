import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Publication Date: {book.publicationDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
