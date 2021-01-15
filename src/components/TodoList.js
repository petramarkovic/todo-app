import React, { Component } from 'react';
import '../App.css';

export class TodoList extends Component {
    render() {
        return (
                <div className="wrapper">
                    <ul>
                        <li><input className="checkbox-input" type="checkbox"></input>Walk the dog<div className="delete">x</div></li>
                        <li><input className="checkbox-input" type="checkbox"></input>Take out trash<div className="delete">x</div></li>
                    </ul>
                </div>
        )
    }
}

export default TodoList
