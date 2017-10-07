import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = ({
    title,
    books,
    shelfTypes,
    onChangeBookShelf
    }) => (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books && books.map(book => (
                        <li key={`book_${book.id}`}>
                            <Book
                                id={book.title}
                                title={book.title}
                                authors={book.authors}
                                shelf={book.shelf}
                                image={book.imageLinks.smallThumbnail}
                                shelfOptions={shelfTypes}
                                onChangeBookShelf={shelf => onChangeBookShelf(book, shelf)}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    shelfTypes: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
}

export default BookShelf