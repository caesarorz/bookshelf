import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'

import BookList from './BookList'

class SearchBooks extends Component {

    state = {
        query: '',
        searchBooks: []
    }

    searchHandler = e => {
        const query = e.target.value.trim()
        if (query) {
            BooksAPI.search(query)
            .then((searchBooks) => {
                if(!searchBooks.error) {
                    this.setState(() => ({
                        searchBooks
                    }))
                } else {
                    this.setState(() => ({
                        searchBooks: []
                    }))     
                }
          })
        } else {
            this.setState(() => ({
                searchBooks: []
            })) 
        }
    }

    render() {
        const { books, categories } = this.props
        const renderBooks = []

        if (this.state.searchBooks.length > 0) {
            this.state.searchBooks.forEach(book => {
                const filteredBook = books.find(_book => _book.id === book.id)
                if (filteredBook) {
                    renderBooks.push(filteredBook)
                } else {
                    renderBooks.push(book)
                }
            })
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" onChange={this.searchHandler}/>

                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookList categories={categories} testbooks={renderBooks} changeBookShelf={this.props.changeBookShelf} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks