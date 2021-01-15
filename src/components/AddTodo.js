import React, { Component } from 'react'
import '../App.css';


export class AddTodo extends Component {
    render() {
        return (
            <div className="wrapper">
                <label htmlFor="add-todo">Add To Do:</label>
                <input name="add-todo" className="add-todo" type="text"></input>
            </div>
        )
    }
}

export default AddTodo
