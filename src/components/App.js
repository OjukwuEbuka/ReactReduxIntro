import React from 'react';
import BookList from './BookList';
import SelectedBook from './SelectedBook'

const App = () => {
    return (
        <div>
            <BookList />
            <SelectedBook />
        </div>
    )
}

export default App;