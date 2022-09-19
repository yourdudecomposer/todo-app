import './TaskList.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

export default class TaskList extends Component {
  render() {
    this.elements = this.props.todos.map((obj) => {
      const { id, ...rest } = obj;
      return (
        <Task
          key={id}
          id={id}
          {...rest}
          toggleComplete={() => this.props.toggleComplete(id)}
          deleteTodo={() => this.props.deleteTodo(id)}
          saveEditingTodo={this.props.saveEditingTodo}
          startEditTodo={this.props.startEditTodo}
        />
      );
    });
    return <ul className="todo-list">{this.elements}</ul>;
  }
}

TaskList.defaultProps = {
  todos: [
    {
      label: 'something wrong',
      isCompleted: false,
      isEditing: false,
      id: 0,
      date: new Date(-8640000000000000),
    },
  ],
  toggleComplete: () => {},
  deleteTodo: () => {},
  saveEditingTodo: () => {},
  startEditTodo: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isCompleted: PropTypes.bool,
      isEditing: PropTypes.bool,
      id: PropTypes.number,
      date: PropTypes.instanceOf(Date),
    })
  ),
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveEditingTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
};
