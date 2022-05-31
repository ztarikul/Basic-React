import React, { Component, createRef } from "react";

class NewBook extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     bookName: "",
        //     writer: "",
        //     description: ""
        // }

        /// Uncontroll Component

        this.bookName = createRef();
        this.writer = createRef();
        this.description = createRef();

    }


    handleSubmit = (event) =>{
        // console.log(this.state);

        ///uncontroll component:
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description);
        ///
        event.preventDefault(); /// this data can be send to the serve;
    }

    // handleInputChange = (event) =>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     })

    // }


    render(){
        return(
            <div>
                <h1>New Book Entry </h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookName" ref={this.bookName}  />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="writer" ref={this.writer}  />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="description" ref={this.description}  />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </div>
        )
    }
}

export default NewBook;