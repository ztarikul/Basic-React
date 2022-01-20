import React, { Component } from "react";


let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Name : {props.name} and Age: {props.age} years</h1>
            <h2>Extra Info : {props.children}</h2>
        </div>
    );
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>Name : {this.props.name} and Age: {this.props.age} years</h1>
//                 <h2>Extra Info : {this.props.children}</h2>
//             </div>
//         );
//     }
// }

export default Person;