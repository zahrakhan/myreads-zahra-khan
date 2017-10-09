import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            booksFound: [],
            shelfTypes: {
                'currentlyReading': 'Currently Reading',
                'wantToRead': 'Want to Read',
                'read': 'Read',
                'none': 'None'
            }
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
                    .then(booksFound => this.setState({
                        booksFound
                    }, () => console.log(this.state.booksFound)))
            }
        }, 500)

    }
    onChangeQuery = (book, shelf) => {
        BooksAPI
            .update(book, shelf)
            .then(result => {
                const updatedBook = Object.assign(book, {shelf: shelf})
                this.setState(prevState => ({
                    booksFound: Object.assign(prevState.booksFound, prevState.booksFound.map(b => b.id === book.id
                        ? updatedBook
                        : b))
                }))
            })
    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar
                    query={this.state.query}
                    onChangeQuery={this.handleChangeInQuery}/>
                <SearchBooksResults
                    books={this.state.booksFound}
                    shelfTypes={this.state.shelfTypes}
                    onShelveBook={this.onChangeQuery}/>
            </div>
        )
    }
}

export default SearchBooks