import React, { Component } from "react";

class NewBook extends Component {

    constructor(props){
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: ""
        }
    }


    handleSubmit = (event) =>{
        console.log(this.state);
        event.preventDefault(); /// this data can be send to the serve;
    }

    handleInputChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }


    render(){
        return(
            <div>
                <h1>New Book Entry </h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="writer" value={this.state.writer} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
            </div>
        )
    }
}

export default NewBook;