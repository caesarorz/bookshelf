import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'

import BookList from './BookList'

class SearchBooks extends Component {

    state = {
        query: '',
        searchBooks: []
    }

    cleanSearchBooks = () => {
        this.setState(() => ({
            searchBooks: []
        })) 
    }

    cleanQuery = () => {
        this.setState(() => ({
            query: ''
        })) 
    }

    updateQuery = q => {
        const query = q.trim()
        console.log('updateQuery ', query)
        
        if (query === 'undefined' || query === 'null' || query.length === 0) {
            //console.log('updateQuery not valid: ', query)
            this.cleanSearchBooks()
            this.cleanQuery()
            return
        }
        if (query) {
            this.setState(() => ({
                query: query
            }))
            this.searchedBooks(query)
        }
    }

    searchedBooks = (q) => {
        this.cleanSearchBooks()
        BooksAPI.search(q)
            .then((searchBooks) => {
                if(searchBooks && searchBooks.error) {
                    this.updateQuery('')
                    return
                }
                this.setState(() => ({
                    searchBooks
            })) 
        })
      }

    render() {
        const renderBooks = []
        const { books, categories } = this.props
        const { query, searchBooks } = this.state
        
        const checkBooksExists = (searchBooks && searchBooks.length > 0) || false

        if (checkBooksExists) {
            searchBooks.forEach(book => {
                const filteredBook = books.find(_book => _book.id === book.id)
                if (filteredBook) {
                    renderBooks.push(filteredBook)
                } else {
                    renderBooks.push(book)
                }
            })
        }

        console.log("query   ", query, typeof query, query.length, checkBooksExists)

        const listOfBooks = checkBooksExists || query === '' ? (
            <BookList 
                categories={categories} 
                bookslist={renderBooks} 
                changeBookShelf={this.props.changeBookShelf} />
        ) : (<ol className="books-grid">No books with searched criteria</ol>)

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
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery((event.target.value))}/>

                </div>
                </div>
                <div className="search-books-results">
                    {listOfBooks}
                </div>
            </div>
        )
    }
}

export default SearchBooks


    // searchHandler = e => {
    //     const query = e.target.value.trim()
    //     if (query) {
    //         BooksAPI.search(query)
    //         .then((searchBooks) => {
    //             if(!searchBooks.error) {
    //                 this.setState(() => ({
    //                     searchBooks
    //                 }))
    //             } else {
    //                 this.setState(() => ({
    //                     searchBooks: []
    //                 }))     
    //             }
    //       })
    //     } else {
    //         this.setState(() => ({
    //             searchBooks: []
    //         })) 
    //     }
    // }

        // queryHandler = e => {
    //     const query = e.target.value
    //     console.log("queryHandler ", query)
    //     if (query.trim() === 'undefined' || query.trim() === 'null') {
    //         this.setState(() => ({
    //             searchBooks: []
    //         })) 
    //         this.setState(() => ({
    //             query: ''
    //         })) 
    //     }

    //     BooksAPI.search(query)
    //         .then((searchBooks) => {
    //             this.setState(() => ({
    //                 searchBooks
    //             })) 
    //     })
    //     this.setState((query) => ({
    //         query
    //     })) 
    // }
 