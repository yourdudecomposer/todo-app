import './NewTaskForm.css';
import React from 'react';



export default class NewTaskForm extends React.Component {
    state = {
        label: '',
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.label);
        this.setState({
            label: ''
        })
    }
    
    onTodoInput = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={this.onTodoInput}
                    value={this.state.label} />
            </form>
        )
    }
}

