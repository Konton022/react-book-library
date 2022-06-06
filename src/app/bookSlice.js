import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        editBook: () => {},
        deleteBook: (state, action) => {
            console.log(action.payload);
            console.log('state.books', ...state.books);
            const filteredBooks = state.books.filter(
                (item) => item.id !== action.payload
            );
            console.log('filteredBooks', filteredBooks);
        },
    },
});

export const { addBook, editBook, deleteBook } = bookSlice.actions;

export const setBookStorege = () => {};
export const getBookStorage = () => {};

export default bookSlice.reducer;
