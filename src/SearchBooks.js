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
            error: ''
        }
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
                        if (booksFound && !booksFound.error){
                            booksFound = this.mapShelvedBooksInSearchResult(booksFound, this.props.books)
                            this.setState({booksFound, error: ''})
                        }else
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
    mapShelvedBooksInSearchResult = (booksFound, shelvedBooks) => {
        return  booksFound.map(bookFound => {
            for(const shelveBook of shelvedBooks){
                if(shelveBook.id===bookFound.id)
                bookFound.shelf = shelveBook.shelf
            }
            return bookFound
        })
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
                    shelfTypes={this.props.shelfTypes}
                    onChangeBookShelf={this.handleChangeBookShelve}/>
                <div className="search-books-error">
                    {this.state.error}
                </div>
            </div>
        )
    }
}

export default SearchBooks