import './TaskList.css';
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

export default function TaskList(props) {
  const elements = props.todos.map((obj) => {
    const { id, ...rest } = obj;
    return (
      <Task
        key={id}
        id={id}
        {...rest}
        toggleComplete={() => props.toggleComplete(id)}
        deleteTodo={() => props.deleteTodo(id)}
        saveEditingTodo={props.saveEditingTodo}
        startEditTodo={props.startEditTodo}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todos: [
    {
      label: 'something wrong',
      isCompleted: false,
      isEditing: false,
      id: 0,
      date: new Date(-8640000000000000),
      timer: 0,
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
      timer: PropTypes.number,
    })
  ),
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveEditingTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
};
