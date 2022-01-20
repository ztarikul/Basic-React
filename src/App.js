import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import Teacher from './components/Teacher';


//State Defined

//Older Version == Must use Constructor

class App extends Component {
  state = {
    books: [
      { bookname: "1984", writer: "George Orwel" },
      { bookname: "The DA Vinci Code", writer: "Don Brown" },
      { bookname: "The Alchemist", writer: "Paulo Coelho" },
    ],
    otherProp: "I am other Prop"
  }

  changeBookState = (newBookName) => {
    //Wrong  this.state.books[0] = "1974"

    this.setState({
      books: [
        { bookname: newBookName, writer: "George Orwel" },
        { bookname: "The DA Vinci Code", writer: "Don Brown" },
        { bookname: "Metmorphosis", writer: "Kafka" },
      ]
    })
  }

  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookname: event.target.value, writer: "George Orwel" },
        { bookname: "The DA Vinci Code", writer: "Don Brown" },
        { bookname: "Metmorphosis", writer: "Kafka" },
      ]
    })
  }


  render() {

    //INLINE CSS CODE
    const style = {
      border: "1px solid black",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.changeBookState.bind(this, "Nineteen Eighty-Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookname={this.state.books[0].bookname}
          writer={this.state.books[0].writer}
          otherProp={this.state.otherProp}
          inputName={this.changeWithInputState} />
        <Book
          bookname={this.state.books[1].bookname}
          writer={this.state.books[1].writer} />
        <Book
          bookname={this.state.books[2].bookname}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen 84")} />

      </div>
    );
  }
}

// let App = () => {
//   return (
//     <div className="App">
//       <h1>Teacher List</h1>
//       <Teacher teacherName="Rahim" des="Lecturer" />
//       <Teacher teacherName="Karim" des="Sr. Lecturer" />
//       <Teacher teacherName="Helal" des="Professor" />

//     </div>
//   );
// }





export default App;
