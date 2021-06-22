import React from 'react'
import PropTypes from 'prop-types';

import Book from './Book'

const BookList = props => {
    const { categories, bookslist } = props;

    const booksListRendered = bookslist.length > 0 ? (
        bookslist.map(book => 
            (<Book key={book.id} book={book} categories={categories} bookslist={bookslist} changeBookShelf={props.changeBookShelf}/>)
        )
    ) : 'No books here!'

    return (
            <ol className="books-grid">
                {booksListRendered}
            </ol>
        )
}

BookList.PropTypes = {
    categories: PropTypes.array.isRequired, 
    bookslist: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default BookList