import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../app/bookSlice';

const BookItem = ({ author, book, id, picData, isEdit }) => {
    const dispatch = useDispatch(deleteBook);
    function handleDelete(id) {
        dispatch(deleteBook(id));
    }
    return (
        <div className={s.bookCard}>
            <div className={s.bookImage}>
                <img src='#' alt='' />
            </div>
            <div className={s.bookTitle}>{book}</div>
            <div className={s.bookAuthor}>{author}</div>
            <div className={s.bookActions}>
                <img
                    src='https://img.icons8.com/glyph-neue/64/000000/edit.png'
                    alt='edit'
                    className={s.bookActions_icon}
                />
                <img
                    src='https://img.icons8.com/windows/32/000000/delete-forever.png'
                    alt='delete'
                    className={s.bookActions_icon}
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    );
};

export default BookItem;
