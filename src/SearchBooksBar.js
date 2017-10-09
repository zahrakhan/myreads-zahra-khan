import React from 'react'
import {Link} from 'react-router-dom'

const SearchBooksBar = ({query, onChangeQuery}) => (
    <div className="search-books-bar">
        <Link className="close-search" to='/'>
            Close
        </Link>
        <div className="search-books-input-wrapper">
            <input
                autoFocus
                type="text"
                value={query}
                placeholder="Search by title or author"
                onChange={(event) => onChangeQuery(event.target.value)}/>

        </div>
    </div>
)

export default SearchBooksBar
