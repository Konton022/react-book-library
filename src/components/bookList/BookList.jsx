import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css';

const BookList = () => {
    const books = useSelector((state) => state.books.books);
    return (
        <div className='bookList'>
            <ul>
                {books.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <div>{item.author}</div>
                                <div>{item.book}</div>
                            </div>
                            <div>
                                <button>edit</button>
                                <button>del</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BookList;
