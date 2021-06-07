import React, { Component } from 'react';

import BookList from './BookList'

class CategoryList extends Component {
    render() {
        const bookshelf = {
            ['currentlyReading']: { id: 'currentlyReading', title: 'Currently Reading', books: [] },
            ['wantToRead'] : { id: 'wantToRead', title: 'Want to Read', books: [] },
            ['read'] : { id: 'read', title: 'Read', books: [] }
        }
        const { books, categories } = this.props;
        books.forEach(book => {
            if (bookshelf[book.shelf].id === book.shelf) {
                bookshelf[book.shelf].books.push(book)
            }
        });
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                    {Object.values(bookshelf).map((category) =>
                        (<div key={category.id}>
                            <h2 className="bookshelf-title" key={category.id}>{category.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <BookList categories={categories} testbooks={category.books} changeBookShelf={this.props.changeBookShelf}/>
                                </ol>
                             </div>
                        </div>)
                    )}
                </div>
              </div>
            </div>
        )
    }
}


export default CategoryList