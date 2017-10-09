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
            error: '',
            shelfTypes: {
                'currentlyReading': 'Currently Reading',
                'wantToRead': 'Want to Read',
                'read': 'Read',
                'none': 'None'
            }
        }
    }
    componentWillUnmount() {
    }
    handleChangeInQuery = (query) => {
        this.setState({
            query: query.trim()
        }, () => this.searchForBooks())
    }
    searchForBooks = () => {
            if (this.state.query) {
                BooksAPI
                    .search(this.state.query, 20)
                    .then(booksFound => {
                        if (booksFound && !booksFound.error)
                            this.setState({booksFound, error: ''})
                        else
                            this.setState((prevState) => ({
                                booksFound: booksFound || [],
                                error: prevState.query
                                    ? `Your search - ${prevState.query} - did not match any book results`
                                    : ''
                            }))

                    })
                    .catch(error => console.log(error))
            }

    }
    handleChangeBookShelve = (book, shelf) => {
        BooksAPI
            .update(book, shelf)
            .then(result => {
                this.setState(prevState => ({
                    booksFound: prevState
                        .booksFound
                        .map(b => b.id === book.id
                            ? {
                                ...book,
                                shelf: shelf
                            }
                            : b)
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
                    onChangeBookShelf={this.handleChangeBookShelve}/>
                <div className="search-books-error">
                    {this.state.error}
                </div>
            </div>
        )
    }
}

export default SearchBooks