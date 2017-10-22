import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import Spinner from './Spinner'

class SearchBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            booksFound: [],
            error: '',
            loading: false
        }
    }
    /* After book shelf state update make sure correct state is reflected  */
    componentWillReceiveProps(props) {
        if (this.state.booksFound.length > 0) {
            const booksFound = this.mapShelvedBooksInSearchResult(this.state.booksFound, props.books)
            this.setState({booksFound, error: ''})
        }
    }
    handleChangeInQuery = (query) => {
        this.setState({
            query: query.trim()
        }, () => this.searchForBooks())
    }
    searchForBooks = () => {
        if (this.state.query) {
            this.setState({booksFound: [], error: '', loading: true})
            BooksAPI
                .search(this.state.query, 20)
                .then(booksFound => {
                    /* Set state if there is no error otherwise show error */
                    if (booksFound && !booksFound.error) {
                        booksFound = this.mapShelvedBooksInSearchResult(booksFound, this.props.books)
                        this.setState({booksFound, error: '', loading: false})
                    } else
                        this.setState((prevState) => ({
                            booksFound: [],
                            error: prevState.query
                                ? `Your search - ${prevState.query} - did not match any book results`
                                : '',
                            loading: false
                        }))

                })
                .catch(error => console.log(error))
        }
    }
    /* Map shelved books in search result to show correct state of books in result */
    mapShelvedBooksInSearchResult = (booksFound, shelvedBooks) => {
        return booksFound.map(bookFound => {
            for (const shelveBook of shelvedBooks) {
                if (shelveBook.id === bookFound.id)
                    bookFound.shelf = shelveBook.shelf
            }
            return bookFound
        })
    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar
                    query={this.state.query}
                    onChangeQuery={this.handleChangeInQuery}/>
                <Spinner
                    type={'BeatLoader'}
                    loading={this.state.loading}
                    message={'Searching'}/>
                <SearchBooksResults
                    books={this.state.booksFound}
                    shelfTypes={this.props.shelfTypes}
                    onChangeBookShelf={this.props.onChangeBookShelf}/>
                <div className="search-books-error">
                    {this.state.error}
                </div>
            </div>
        )
    }
}
SearchBooks.propTypes = {
    books: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired,
    shelfTypes: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
}
export default SearchBooks