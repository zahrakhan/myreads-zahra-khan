import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const { title, books, shelfTypes } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map(book => (
                            <li key={`book_${book.id}`}>
                                <Book
                                    title={book.title}
                                    authors={book.authors}
                                    shelf={book.shelf}
                                    image={book.imageLinks.smallThumbnail}
                                    shelfOptions={shelfTypes}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf