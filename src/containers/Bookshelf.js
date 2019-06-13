import React from "react";
import Book from "../components/Book";
import BookList from './BookList'

const Bookshelf = props => {
  console.log(props.shelvedBooks)
  return (
    <div>
    
      <h1>Book Shelf</h1>
      <ul>{props.shelvedBooks.map(book => {
        return <Book book={book}/>
      })}</ul>
    </div>
  );
};

export default Bookshelf;
