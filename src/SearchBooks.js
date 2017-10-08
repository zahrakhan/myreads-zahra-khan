import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            booksFound: []
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
                    .then(booksFound => console.log(booksFound))
            }
        }, 500)

    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar
                    query={this.state.query}
                    onChangeQuery={this.handleChangeInQuery}/>
                <SearchBooksResults books={this.state.booksFound}/>
            </div>
        )
    }
}

export default SearchBooks