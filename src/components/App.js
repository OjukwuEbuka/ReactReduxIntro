import React from 'react';
import BookList from './BookList';
import SelectedBook from './SelectedBook'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <BookList />
                </div>
                <div className="column eight wide">
                        <SelectedBook />
                </div>
            </div>
        </div>
    )
}

export default App;