import React, { Component } from 'react';
import BookList from './list/BookList';
import bookList from '../assets/books.js';
import NewBook from './representational/NewBook';
import { Route, NavLink, Switch, Redirect } from  'react-router-dom';
import BookDetail from './representational/BookDetail';



class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null

        }
    }

    selectedBookHandler = bookId =>{
        const book = this.state.books.filter(book =>
            book.id === bookId )[0];
        this.setState({
            selectedBook : book
        })
    }




    render() {

        //INLINE CSS CODE

        // const bookState = this.state.books;

            const books = <BookList
                books={this.state.books}
                selectedBookHandler={this.selectedBookHandler}
            
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
                <Switch>
                    <Route path="/books" exact render={() => books } /> 
                    <Route path="/new-book" exact component={NewBook} />
                    <Route path="/:id" render={() => <BookDetail book={this.state.selectedBook} />}/>
                    <Redirect from="/" to="/books" />
                    
                </Switch>
      
               
                        
                
                
                

            </div>
        ); //  {this.state.showBooks ? books : null}  Conditional Operator; if show books true show books, otherwise show null
    }

}

export default MainComponent;