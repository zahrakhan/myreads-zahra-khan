import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        let { books, shelfTypes } = this.props
        const bookshelves = shelfTypes
            .filter(shelf => shelf.type !== 'none')
            .map(shelf => (
                <BookShelf key={shelf.type} title={shelf.label} books={books.filter(book => book.shelf === shelf.type)} />
            ))

        return (
            <div className="list-books" >
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {bookshelves}
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.onClickSearch()}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks