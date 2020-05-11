import { combineReducers } from 'redux';

const books = (bookList=[], action) => {
    return [
        {id: 1,name:"The Eye of the World", pages:456},
        {id: 2,name:"The Great Hunt", pages:668},
        {id: 4,name:"The Dragon Reborn", pages:872},
        {id: 3,name:"The Shadow Rising", pages:762},
        {id: 5,name:"The Fires of Heaven", pages:876},
        {id: 7,name:"A Crown of Swords", pages:764},
        {id: 8,name:"A Path of Daggers", pages:690},
        {id: 6,name:"Crossroads of Twilight", pages:676},
        {id: 9,name:"Winter's Heart", pages:676},
        {id: 10,name:"Knife of Dreams", pages:821},
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