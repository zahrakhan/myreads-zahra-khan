import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import { groupItems } from './Utils'

class MyReads extends React.Component {
    state = {
        shelves: {},
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
        BooksAPI.getAll()
            .then(books => groupItems(books, 'shelf'))
            .then(shelves => this.setState({ shelves }))

    }

    handleChangeInBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
          // .then(books => console.log('updated', books))
          .then(() => this.loadMyReads())
      }

    render() {
        return (
            <ListBooks {...this.state}
                onChangeBookShelf={this.handleChangeInBookShelf} />
        )
    }
}
export default MyReads