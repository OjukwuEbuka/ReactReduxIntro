import { combineReducers } from 'redux';

const books = (bookList=[], action) => {
    return [
        {id: 1,name:"The Eye of the World", pages:456},
        {id: 2,name:"The Great Hunt", pages:668},
        {id: 4,name:"The Dragon Reborn", pages:872},
        {id: 3,name:"The Fires of Heaven", pages:762}
    ]
}


const selectBook = (book=null, action) => {
    if(action.type === 'SELECT_BOOK'){
        return action.payload;
    }

    return book;
}

export const reducer = combineReducers({
    selectBook: selectBook,
    books: books,
})