import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteBook, setEditBook, submitEditBook } from '../../app/bookSlice';

const BookItem = ({ author, title, id, picData, isEdit }) => {
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentAuthor, setCurrentAuthor] = useState(author);

    const dispatch = useDispatch();
    function handleDelete(id) {
        dispatch(deleteBook(id));
    }
    function handleEdit(id) {
        dispatch(setEditBook(id));
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (currentTitle && currentAuthor) {
            dispatch(
                submitEditBook({
                    id: id,
                    author: currentAuthor,
                    title: currentTitle,
                })
            );
            dispatch(setEditBook(id))
        } else {
            alert('add Book Title and Author then press Enter')
        }
    }
    return (
        <div className={s.bookCard}>
            <div className={s.bookImage}>
                <img src='#' alt='' />
            </div>
            {isEdit ? (
                <form onSubmit={handleSubmit} className={s.editForm}>
                    <input
                        type='text'
                        value={currentTitle}
                        onChange={(e) => setCurrentTitle(e.target.value)}
                        className={s.editForm_input}
                    />
                    <input
                        type='text'
                        value={currentAuthor}
                        onChange={(e) => setCurrentAuthor(e.target.value)}
                        className={s.editForm_input}
                    />
                    <button type='submit' className={s.editButton}>+</button>
                </form>
            ) : (
                <>
                    <div className={s.bookTitle}>{title}</div>
                    <div className={s.bookAuthor}>{author}</div>
                </>
            )}
            <div className={s.bookActions}>
                <img
                    src='https://img.icons8.com/glyph-neue/64/000000/edit.png'
                    alt='edit'
                    className={s.bookActions_icon}
                    onClick={() => handleEdit(id)}
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
