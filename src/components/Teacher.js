import React from "react";

const Teacher = (props) => {
    return (
        <div>
            <h3>Name: {props.teacherName} </h3>
            <h4>Designation : {props.des}</h4>
        </div>
    );
}

export default Teacher;