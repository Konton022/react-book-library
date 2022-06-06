import React from 'react';
import s from './style.module.css';

const BookItem = ({ author, book, id, picData, isEdit }) => {
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
                    className={s.bookActions_pic}
                    
                />
                <img
                    src='https://img.icons8.com/windows/32/000000/delete-forever.png'
                    alt='delete'
                    className={s.bookActions_pic}
                />
            </div>
        </div>
    );
};

export default BookItem;
