import React from "react";
import '../../stylesheets/Book.css';
import { withRouter } from "react-router-dom";

const Book = (props) => {

    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3>Book: {props.bookname}</h3>
            <h4>Writer: {props.writer}</h4>
            
        </div>
    );
}

export default withRouter(Book);