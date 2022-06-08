import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        setEditBook: (state, action) => {
            const editedState = state.books.map((item) => {
                if (item.id === action.payload) {
                    item.isEdit = !item.isEdit;
                }
                return item;
            });
            state.books = editedState;
        },
        submitEditBook(state, action) {
            const { id, author, title } = action.payload;
            const submitedState = state.books.map((item) => {
                if (item.id === id) {
                    item.author = author;
                    item.title = title;
                }
                return item;
            });
            state.books = submitedState;
        },
        deleteBook: (state, action) => {
            const filteredState = state.books.filter(
                (item) => item.id !== action.payload
            );
            state.books = filteredState;
        },
    },
});

export const { setBooks, addBook, setEditBook, deleteBook, submitEditBook } =
    bookSlice.actions;

export default bookSlice.reducer;
