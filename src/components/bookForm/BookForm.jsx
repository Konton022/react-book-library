import React from 'react';
import { useState } from 'react';
import { addBook } from '../../app/bookSlice';
import { useDispatch } from 'react-redux';
import styles from './style.module.css';

const BookForm = () => {
    const [author, setAuthor] = useState('');
    const [book, setBook] = useState('');
    const dispatch = useDispatch();

    // const [picture, setPicture] = useState(null);
    function handleSubmit(e) {
        e.preventDefault();
        if (author && book) {
            dispatch(
                addBook({
                    author: author,
                    title: book,
                    id: Date.now(),
                    isEdit: false,
                })
            );
            setAuthor('');
            setBook('');
        } else {
            alert('add Author and Book title then press Enter!');
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputfield}>
                <label htmlFor='author'>Author</label>
                <input
                    id='author'
                    className={styles.input}
                    type='text'
                    placeholder='Pushkin'
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div className={styles.inputfield}>
                <label htmlFor='book'>Book title</label>
                <input
                    id='book'
                    className={styles.input}
                    type='text'
                    placeholder='Eugeny Onegin'
                    value={book}
                    onChange={(event) => setBook(event.target.value)}
                />
            </div>
            <div className={styles.inputfield}>
                <label htmlFor='picture'>Book picture</label>
                <input
                    id='picture'
                    type='file'
                    name='booktitle'
                    className={styles.input}
                    accept='.jpg, .jpeg, .png'
                />
            </div>
            <button type='submit' className={styles.button}>
                add New Book
            </button>
        </form>
    );
};

export default BookForm;
