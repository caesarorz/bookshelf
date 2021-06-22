import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

import CategoryList from './CategoryList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    categories: [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read' },
      { id: 'read', title: 'Read' }
    ],
  }

  onChangeBookShelf = (bookElt, shelf) => {
    BooksAPI.update(bookElt, shelf)
    bookElt.shelf = shelf
    this.setState(prevState => (
      { books: [...prevState.books.filter(book => book.id !== bookElt.id), bookElt] }
    ));
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route 
          path='/search' 
          render={() => 
          (<SearchBooks 
            categories={this.state.categories} 
            books={this.state.books} 
            changeBookShelf={this.onChangeBookShelf}
            />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <CategoryList 
              categories={this.state.categories} 
              books={this.state.books} 
              changeBookShelf={this.onChangeBookShelf}
            />
            <Link className="open-search" to='/search'>
              <button>Add a book</button>
            </Link>
          </div>
        )}/>
      </div>
    )
  }
}


export default BooksApp