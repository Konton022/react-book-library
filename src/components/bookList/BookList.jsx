import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../bookItem/BookItem';
import styles from './style.module.css';

const BookList = () => {
    const books = useSelector((state) => state.books.books);
    return (
        <div className='bookList'>
            {books.map((item) => {
                return (
                    <BookItem
                        key={item.id}
                        author={item.author}
                        book={item.book}
                        isEdit={item.isEdit}
                    />
                );
            })}
        </div>
    );
};

export default BookList;
