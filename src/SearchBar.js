import React from 'react'

const SearchBar = ({query, onChangeQuery}) => (
    <div className="search-books-input-wrapper">
        <input
            type="text"
            value={query}
            placeholder="Search by title or author"
            onChange={(event) => onChangeQuery(event.target.value)}/>
    </div>
)

export default SearchBar