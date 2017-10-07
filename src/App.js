import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { groupItems } from './Utils'
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
    shelves: {},
    shelfTypes: {
      'currentlyReading': 'Currently Reading',
      'wantToRead': 'Want to Read',
      'read': 'Read',
      'none': 'None'
    }
  }
  componentDidMount() {
    this.loadMyBookShelves()
  }
  loadMyBookShelves = () => {
    BooksAPI.getAll()
      .then(books => groupItems(books, 'shelf'))
      .then(shelves => this.setState({ shelves }))
  }
  handleChangeInBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      // .then(books => console.log('updated', books))
      .then(() => this.loadMyBookShelves())
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
          <ListBooks {...this.state} onSearch={this.navigateToSearch} onChangeBookShelf={this.handleChangeInBookShelf} />
        }
      </div>
    )
  }
}

export default BooksApp
