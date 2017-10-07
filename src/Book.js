import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const Book = ({
    title,
    authors,
    image,
    shelf,
    shelfOptions,
    onChangeBookShelf
    }) => (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}>
                </div>
                <BookShelfChanger
                    selectedValue={shelf}
                    defaultValue={'none'}
                    options={shelfOptions}
                    onChange={onChangeBookShelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(', ')}</div>
        </div>

    )

Book.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    shelfOptions: PropTypes.object.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
}

Book.defaultProps = {
    title: '',
    authors: ['Unknown Author'],
    image: '',
    shelf: 'none'
}

export default Book