import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import {groupItems} from './Utils'

const ListBooks = ({books, shelfTypes, onChangeBookShelf}) => {
    let shelves = {}
    if (books.length > 0) {
        shelves = groupItems(books, 'shelf')
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {Object
                    .keys(shelves)
                    .map(shelf => (<BookShelf
                        key={shelf}
                        title={shelfTypes[shelf]}
                        books={shelves[shelf]}
                        shelfTypes={shelfTypes}
                        onChangeBookShelf={onChangeBookShelf}/>))}
            </div>
            <div className="open-search">
                <Link to='/search'>
                    Add a book
                </Link>
            </div>
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,
    shelfTypes: PropTypes.object,
    onChangeBookShelf: PropTypes.func.isRequired
}

export default ListBooks