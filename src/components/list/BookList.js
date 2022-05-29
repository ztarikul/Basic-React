import React, { Component } from 'react';
// import { Component } from 'react/cjs/react.production.min';
import Book from '../representational/Book';
import { withRouter } from 'react-router-dom';


class BookList extends Component {
  
    render() {
    console.log(this.props);      
        return (
            this.props.books.map((book, index) => {
                // console.log(book);
                return (
                    <Book
                        bookname={book.bookname}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })

        );
    }

}


export default withRouter(BookList);