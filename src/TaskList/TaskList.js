import './TaskList.css';
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

export default function TaskList(props) {
  const { toggleComplete, deleteTodo, saveEditingTodo, startEditTodo, todos } = props;

  const elements = todos.map((obj) => {
    const { id, ...rest } = obj;
    return (
      <Task
        key={id}
        id={id}
        {...rest}
        toggleComplete={() => toggleComplete(id)}
        deleteTodo={() => deleteTodo(id)}
        saveEditingTodo={saveEditingTodo}
        startEditTodo={startEditTodo}
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
      id: '',
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
      id: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      timer: PropTypes.number,
    })
  ),
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveEditingTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
};
