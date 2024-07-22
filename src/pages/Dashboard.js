import React, { useState } from "react";
import BookForm from "../components/BookForm";
import AuthorForm from "../components/AuthorForm";
import BookList from "../components/BookList";
import AuthorList from "../components/AuthorList";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <div className="form-section">
        <h2>Add Book</h2>
        <BookForm onSubmit={handleAddBook} />
      </div>
      <div className="form-section">
        <h2>Add Author</h2>
        <AuthorForm onSubmit={handleAddAuthor} />
      </div>
      <div className="list-section">
        <BookList books={books} />
        <AuthorList authors={authors} />
      </div>
    </div>
  );
};

export default Dashboard;
