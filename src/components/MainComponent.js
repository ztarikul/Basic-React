import React, { Component } from 'react';
import BookList from './list/BookList';
import bookList from '../assets/books.js';


class MainComponent extends Component {
    state = {
        books: bookList,
        showBooks: true

    }




    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index] ///Spread Operator

        }
        book.bookname = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({ books: books });
    }


    deleteBookState = index => {
        // const books = this.state.books;
        // const books = this.state.books.slice();
        // const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    }
    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })

    }


    render() {

        //INLINE CSS CODE
        const style = {
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white"
        }



        // const bookState = this.state.books;


        let books = null;
        if (this.state.showBooks) {
            books = <BookList
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            /> // Three parameter -> item, index, array

            // console.log(bookState);
        }





        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {books}

            </div>
        ); //  {this.state.showBooks ? books : null}  Conditional Operator; if show books true show books, otherwise show null
    }

}

export default MainComponent;