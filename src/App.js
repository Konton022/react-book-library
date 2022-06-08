import React from 'react';
import './App.css';
import HeaderApp from './components/headerApp/headerApp';
import BookForm from './components/bookForm/BookForm';
import BookList from './components/bookList/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setBooks } from './app/bookSlice';
function App() {
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    useEffect(() => {
        const getLocalstorage = JSON.parse(localStorage.getItem('books'))
            ? JSON.parse(localStorage.getItem('books'))
            : [];
        if (getLocalstorage.length) {
            dispatch(setBooks(getLocalstorage));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return (
        <div className='app'>
            <HeaderApp />
            <BookForm />
            <BookList />
        </div>
    );
}

export default App;
