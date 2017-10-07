import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'

class SearchBooks extends Component {
    state = {
        query: ''
    }
    handleChangeInQuery = (query) => {
        this.setState({query})
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        Close
                    </Link>
                    <SearchBar query={this.state.query} onChangeQuery={this.handleChangeInQuery}/>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks