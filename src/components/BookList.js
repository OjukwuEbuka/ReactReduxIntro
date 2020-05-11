import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

const BookList = props => {
    return (
        <div className="ui divided list">
            {props.books.map(book => {
                return (
                    <div key={book.id} className="item">
                        <div className="right floated content">
                            <button className="ui button primary"
                            onClick={()=>props.selectBook(book)}>Select</button>
                        </div>
                        <div className="content">{book.name}</div>
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