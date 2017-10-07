import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    render() {
        const book = { ...this.props }
        const { shelfOptions, onChangeBookShelf } = book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${book.image}")` }}>
                    </div>
                    <BookShelfChanger
                        selectedValue={book.shelf}
                        defaultValue={'none'}
                        options={shelfOptions}
                        onChange={onChangeBookShelf}/>
                </div>
                <div className="book-title">{book.title || ''}</div>
                <div className="book-authors">
                    {book.authors && book.authors.length ? book.authors.join(', ') : 'Unknown Author'}
                </div>
            </div>
        )
    }
}

export default Book