import React, { Component } from 'react';
// import { Component } from 'react/cjs/react.production.min';
import Book from '../representational/Book';


class BookList extends Component {
    constructor(props) {
        super(props);

        console.log("BookList constructor!");

    }


    UNSAFE_componentWillMount() {
        console.log("BookList componentWillMount!");
    }

    componentDidMount() {
        console.log("BookList componentDidMount!");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U MainComponent shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U MainComponent componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("U MainComponent componentDidUpdate");
    }

    render() {
        console.log("BookList render!");
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


export default BookList;