import React from 'react';
import './App.css';
import HeaderApp from './components/headerApp/headerApp';
import BookForm from './components/bookForm/BookForm';
import BookList from './components/bookList/BookList';
import {useSelector} from 'react-redux';
import {useEffect} from 'react'
function App() {
    const books = useSelector((state) => state.books.books);
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
        
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
