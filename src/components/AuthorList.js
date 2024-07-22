import React from "react";

const AuthorList = ({ authors }) => {
  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <p>Name: {author.name}</p>
            <p>Birth Date: {author.birthDate}</p>
            <p>Biography: {author.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
