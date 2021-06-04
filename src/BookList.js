import React, { Component } from 'react';


class BookList extends Component {

    changeSelectHandle = e => {
        console.log(e.target.value)
    }

    render() {
        const { books, categories } = this.props;
        // books.forEach(element => {
        //     console.log(element)
        // });
        return (
            books.map(book => 
                (<li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value='wantToRead' onChange={this.changeSelectHandle}>
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