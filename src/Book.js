import React, { Component } from 'react'

class Book extends Component {
    render() {
        const book = { ...this.props.detail }
        const { options } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf || 'none'}>
                                <option value="none" disabled>Move to...</option>
                                {options && options.map(option => (
                                    <option value={option.type}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book