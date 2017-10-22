import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfTypes: {
      'currentlyReading': 'Currently Reading',
      'wantToRead': 'Want to Read',
      'read': 'Read',
      'none': 'None'
    }
  }

  componentDidMount() {
    this.loadMyReads()
  }

  loadMyReads = () => {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books});
        return books;
      })
      .catch(error => console.log('Error loading shelved books', error))

  }

  handleChangeInBookShelf = (book, shelf) => {
    BooksAPI.update({
      id: book.id
    }, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState
          .books
          .filter(savedBook => savedBook.id !== book.id)
          .concat({
            ...book,
            shelf
          })
          .filter(book => book.shelf !== 'none')
      }))
    }).catch(error => console.log('Error updating book status', error))
  }

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (<ListBooks {...this.state} onChangeBookShelf={this.handleChangeInBookShelf}/>)}/>
        <Route
          exact
          path='/search'
          render={() => (<SearchBooks {...this.state} onChangeBookShelf={this.handleChangeInBookShelf}/>)}/>

      </div>
    )
  }
}

export default BooksApp
