import React from 'react'
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
            <div className="book-title">{title || ''}</div>
            <div className="book-authors">
                {authors && authors.length ? authors.join(', ') : 'Unknown Author'}
            </div>
        </div>

    )
export default Book