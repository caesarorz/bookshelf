import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {

    const changeSelectHandle = e => {
        if(e.target.id === 'undefined' || e.target.shelf === 'undefined'){
            return
        }

        if (props.changeBookShelf) {
            const searchedBook = props.bookslist.find(book => e.target.id === book.id)
            if(searchedBook){
                props.changeBookShelf(searchedBook, e.target.value)
            }
        }
    }

    const { categories, book } = props;

    return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks && book.imageLinks.smallThumbnail !== 'undefined' ? book.imageLinks.smallThumbnail : ''}")` }}></div>
                        <div className="book-shelf-changer">
                            <select id={book.id} value={book && book.shelf ? book.shelf : 'none'} onChange={changeSelectHandle}>
                                <option value="move" disabled>Move to...</option>
                                {categories.map(category => (<option key={category.id} value={category.id}>{category.title}</option>))}
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                </div>
            </li>
        )
}

Book.PropTypes = {
    categories: PropTypes.array.isRequired, 
    bookslist: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default Book