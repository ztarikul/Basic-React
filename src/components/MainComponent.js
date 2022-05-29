import React, { Component } from 'react';
import BookList from './list/BookList';
import bookList from '../assets/books.js';
import NewBook from './representational/NewBook';
import { Route, NavLink } from  'react-router-dom';



class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList

        }
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




 

    render() {

        //INLINE CSS CODE

        // const bookState = this.state.books;

            const books = <BookList
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            /> // Three parameter -> item, index, array

            // console.log(bookState);





        return (
            <div className="App">
                <nav className="nav-bar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/new-book">New Book</NavLink></li>
                </ul>
                </nav>
                
                <Route path="/" exact render={() => books } /> 
                <Route path="/new-book" exact component={NewBook} /> 
               
                        
                
                
                

            </div>
        ); //  {this.state.showBooks ? books : null}  Conditional Operator; if show books true show books, otherwise show null
    }

}

export default MainComponent;