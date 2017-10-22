import React from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import PropTypes from 'prop-types'

const SearchBooksBar = ({query, onChangeQuery}) => (
    <div className="search-books-bar">
        <Link className="close-search" to='/'>
            Close
        </Link>
        <div className="search-books-input-wrapper">
            <DebounceInput
                minLength={3}
                debounceTimeout={500}
                type="text"
                value={query}
                placeholder="Search by title or author"
                onChange={(event) => onChangeQuery(event.target.value)}/>

        </div>
    </div>
)

SearchBooksBar.propTypes = {
    query: PropTypes.string,
    onChangeQuery: PropTypes.func.isRequired
}

export default SearchBooksBar
