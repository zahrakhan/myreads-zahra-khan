import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: []
        }
        this.timeout = null
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleChangeInQuery = (query) => {
        this.setState({
            query
        }, () => this.searchForBooks())
    }
    searchForBooks = () => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            if (this.state.query) {
                BooksAPI
                    .search(this.state.query, 20)
                    .then(results => console.log(results))
            }
        }, 1000)

    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar
                    query={this.state.query}
                    onChangeQuery={this.handleChangeInQuery}/>
                <SearchBooksResults />
            </div>
        )
    }
}

export default SearchBooks