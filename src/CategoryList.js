import React, { Component } from 'react';

import BookList from './BookList'

class CategoryList extends Component {

    state = {}

    render() {
        const { books, categories } = this.props;
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                    {categories.map((category) =>
                        (<div key={category.id}>
                            <h2 className="bookshelf-title" key={category.id}>{category.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                <BookList books={books} categories={categories}/>
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