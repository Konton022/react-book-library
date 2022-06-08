import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../bookItem/BookItem';
import styles from './style.module.css';

const BookList = () => {
    const books = useSelector((state) => state.books.books);
    return (
        <div className={styles.bookList}>
            {books.length ? (
                books.map((item) => {
                    return (
                        <BookItem
                            key={item.id}
                            author={item.author}
                            title={item.title}
                            isEdit={item.isEdit}
                            id={item.id}
                            cover={item.cover}
                        />
                    );
                })
            ) : (
                <div className={styles.emptyList}> add new book...</div>
            )}
        </div>
    );
};

export default BookList;
