import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

const BookList = props => {
    return (
        <div>
            {props.books.map(book => {
                return (
                    <div key={book.id}>
                        {book.name}
                        <button onClick={()=>props.selectBook(book)}>Select</button>
                    </div>
                    )
                }
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {books: state.books};
}

export default connect(mapStateToProps, {selectBook,})(BookList);