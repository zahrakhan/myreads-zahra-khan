import React from 'react'
import Book from './Book'

const SearchBooksResults = ({books, shelfTypes, onChangeBookShelf}) => (
    <div className="search-books-results">
        <ol className="books-grid">
        {books && books.map(book => (
                    <li key={`book_${book.id}`}>
                        <Book
                            id={book.title}
                            title={book.title}
                            shelf={book.shelf}
                            authors={book.authors}
                            image={book.imageLinks.smallThumbnail}
                            shelfOptions={shelfTypes}
                            onChangeBookShelf={shelf => onChangeBookShelf(book, shelf)}/>
                    </li>
                ))}
        </ol>
    </div>
)

export default SearchBooksResults
