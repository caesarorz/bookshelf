import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CategoryList from './CategoryList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],  // books from api
    categories: [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read' },
      { id: 'read', title: 'Read' }
    ],
  }

  onChangeBookShelf = filterBook => {
    if (filterBook.shelf.toLowerCase() !== 'none') {
      this.setState(prevState => (
        { books: [...prevState.books.filter(book => book.id !== filterBook.id), filterBook] }
      ));
    } else {
      this.setState(prevState => (
        { books: [...prevState.books.filter(book => book.id !== filterBook.id)] }
      ));
    }
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
          render={({ history }) => 
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
