import React, { Component } from 'react'

class Book extends Component {
    render() {
        const book = { ...this.props }
        const { shelfOptions } = book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${book.image}")` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf || 'none'}>
                            <option value="none" disabled>Move to...</option>
                            {Object.keys(shelfOptions).map(option => (
                                <option key={option} value={option}>
                                    {shelfOptions[option]}
                                </option>
                            ))}
                        </select>
                    </div>
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