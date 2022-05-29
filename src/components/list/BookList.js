import React, { Component } from 'react';
// import { Component } from 'react/cjs/react.production.min';
import Book from '../representational/Book';
import { Link, withRouter } from 'react-router-dom';


class BookList extends Component {
  
    render() {
    console.log(this.props);      
        return (

            this.props.books.map((book, index) => {
                // console.log(book);
                return (
                    <Link to={"/" + book.id} key={book.id} style={{ textDecoration: "none", color: "black"}}>
                    <Book
                        bookname={book.bookname}
                        writer={book.writer}
                        selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                    />
                    </Link>
                    
                );
            })

        );
    }

}


export default withRouter(BookList);