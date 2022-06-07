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
        setEditBook: (state, action) => {
            const editedState = state.books.map(item => {
                if(item.id === action.payload) {
                    item.isEdit = !item.isEdit
                }
                return item
            })
            state.books = editedState;
        },
        submitEditBook(state, action){
            const submitedState = state.books.map(item=>{
                if(item.id === action.id) {
                    item.author = action.author;
                    item.title = action.title;
                }
                return item
            })
            state.books = submitedState;
        },
        deleteBook: (state, action) => {
            const filteredState = state.books.filter(
                (item) => item.id !== action.payload
            )
            state.books = filteredState
        },
    },
});

export const { addBook, setEditBook, deleteBook, submitEditBook } = bookSlice.actions;

export const setBookStorege = () => {};
export const getBookStorage = () => {};

export default bookSlice.reducer;
