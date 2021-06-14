import React from 'react';

import BookList from './BookList'

const CategoryList = props => {

        const bookshelf = {
            ['currentlyReading']: { id: 'currentlyReading', title: 'Currently Reading', books: [] },
            ['wantToRead'] : { id: 'wantToRead', title: 'Want to Read', books: [] },
            ['read'] : { id: 'read', title: 'Read', books: [] }
        }
        const { books, categories } = props;
        books.forEach(book => {
            if (book.shelf === 'none' || book.shelf === 'undefined') {
                return
            }
            if (book && bookshelf[book.shelf].id === book.shelf) {
                bookshelf[book.shelf].books.push(book)
            }
        })
        
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                    {Object.values(bookshelf).map((category) =>
                        (<div key={category.id}>
                            <h2 className="bookshelf-title" key={category.id}>{category.title}</h2>
                            <div className="bookshelf-books">
                                <BookList categories={categories} bookslist={category.books} changeBookShelf={props.changeBookShelf}/>
                             </div>
                        </div>)
                    )}
                </div>
              </div>
            </div>
        )

}


export default CategoryList