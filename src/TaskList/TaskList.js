import './TaskList.css';
import Task from '../Task/Task';
import React, { Component } from 'react';



export default class TaskList extends Component {


    render() {
        this.elements = this.props.todos.map(obj => {
            const { id, ...rest } = obj;
            return <Task
                key={id}
                id={id}
                {...rest}
                toggleComplete={() => this.props.toggleComplete(id)}
                deleteTodo={() => this.props.deleteTodo(id)}
                saveEditingTodo={this.props.saveEditingTodo}
                startEditTodo={this.props.startEditTodo} />
        })
        return (
            <ul className='todo-list' >
                {this.elements}
            </ul>
        )

    }
}




