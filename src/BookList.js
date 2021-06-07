import React, { Component } from 'react';

class BookList extends Component {

    state = {
        bookshelf: []
    }

    changeSelectHandle = e => {
        if (this.props.changeBookShelf) {
            const searchedBook = this.props.testbooks.find(book => e.target.id === book.id)
            if(searchedBook){
                searchedBook.shelf = e.target.value
                this.props.changeBookShelf(searchedBook)
            }
        }
    }

    render() {
        const { categories, testbooks } = this.props;
        return (
            testbooks.map(book => 
                (<li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                                <select id={book.id} value={book && book.shelf ? book.shelf : 'none'} onChange={this.changeSelectHandle}>
                                    <option value="move" disabled>Move to...</option>
                                    {categories.map(category => (<option key={category.id} value={category.id}>{category.title}</option>))}
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>))
        )
    }
}


export default BookList