import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    shelfTypes: [
      { type: 'currentlyReading', label: 'Currently Reading',  },
      { type: 'wantToRead', label: 'Want to Read' },
      { type: 'read', label: 'Read' },
      { type: 'none', label: 'None' }
    ]
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  navigateToSearch = () => {
    this.setState({ showSearchPage: true })
  }
  navigateToShelf = () => {
    this.setState({ showSearchPage: false })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBooks onClickBack={this.navigateToShelf} /> :
          <ListBooks books={this.state.books} shelfTypes={this.state.shelfTypes} onClickSearch={this.navigateToSearch} />
        }
      </div>
    )
  }
}

export default BooksApp
