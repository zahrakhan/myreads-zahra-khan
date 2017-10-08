import React, {Component} from 'react'
import SearchBooksBar from './SearchBooksBar'

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
                  <SearchBooksBar query={this.state.query} onChangeQuery={this.handleChangeInQuery}/>

                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks