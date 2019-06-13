import React from "react";
import Book from "../components/Book";
import BookList from './BookList'

const Bookshelf = props => {
  return (
    <div>
    
      <h1>Book Shelf</h1>
      <ul>{props.shelvedBooks.map(book => {
        return <Book/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
