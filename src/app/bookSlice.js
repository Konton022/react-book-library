import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: []
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action)=> {
            state.books.push(action.payload)
        },
        editBook: () => {},
        deleteBook: () => {},

    }
})

export const {addBook, editBook, deleteBook} = bookSlice.actions

export const setBookStorege = () => {}
export const getBookStorage = () => {}