import React from 'react';

const BookForm = () => {
    return (
        
        <form>
            <input type="text" placeholder='write author'/>
            <input type="text" placeholder='write name of book'/>
            <input type="file"/>
            <button type="submit">Add book</button>
        </form>
    );
}

export default BookForm;
