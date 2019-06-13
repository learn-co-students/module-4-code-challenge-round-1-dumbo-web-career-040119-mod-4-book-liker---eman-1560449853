import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const API = "http://localhost:3005/books"
class App extends Component {


  state = {
    books : [],
    shelvedBooks : []
  }

  shelfBook = (book) => {
    this.setState({
      shelvedBooks: [...this.state.shelvedBooks, book]
    })
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        books : data
      })
    })
  }

  render() {
    //console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books} shelvedBooks={this.state.shelvedBooks} shelfBook={this.shelfBook}/>
        <Bookshelf books={this.state.books} shelfBook={this.shelfBook} shelvedBooks={this.state.shelvedBooks}/>
      </div>
    );
  }
}

export default App;
