import React from 'react';
import './App.css';
import BookForm from './components/bookForm/BookForm';
import BookList from './components/bookList/BookList';
function App() {
  return (
    <div className="App">
      <BookForm/>
      <BookList/>
    </div>
  );
}

export default App;
