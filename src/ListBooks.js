import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        let { shelves, shelfTypes, onSearch } = this.props
        return (
            <div className="list-books" >
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {Object.keys(shelves).map(shelf => (
                        <BookShelf
                            key={shelf}
                            title={shelfTypes[shelf]}
                            books={shelves[shelf]}
                            shelfTypes={shelfTypes}
                        />
                    ))}
                </div>
                <div className="open-search">
                    <a onClick={() => onSearch()}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks