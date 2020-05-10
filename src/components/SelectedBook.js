import React from 'react';
import { connect } from 'react-redux';

const SelectedBook = props => {
    if(!props.book){
        return <div>Please Select a Book!</div>
    }
    return (
        <div>
            <p>Book Name: {props.book.name}</p>
            <p>Pages: {props.book.pages}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {book: state.selectBook}
}

export default connect(mapStateToProps)(SelectedBook);