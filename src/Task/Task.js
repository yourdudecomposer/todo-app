import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';

export default function Task(props) {
  const { id, isCompleted, isEditing, label, date, timer, toggleComplete, deleteTodo, saveEditingTodo, startEditTodo } =
    props;
  const timeAgo = formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
  });

  let liClass = '';

  const [title, setTitle] = useState(label);

  const updateState = (e) => {
    setTitle(e.target.value);
  };

  if (isCompleted && isEditing) {
    liClass = 'editing';
  } else if (isCompleted) {
    liClass = 'completed';
  } else if (isEditing) {
    liClass = 'editing';
  } else liClass = '';

  return (
    <li className={liClass}>
      <div className="view">
        <input className="toggle" checked={isCompleted} type="checkbox" onChange={toggleComplete} />
        <label htmlFor="">
          <span className="title" onClick={toggleComplete}>
            {title}
          </span>
          <Timer isCompleted={isCompleted} timer={timer} />
          <span className="description">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit" onClick={() => startEditTodo(id)}></button>
        <button className="icon icon-destroy" onClick={deleteTodo}></button>
      </div>
      <input
        type="text"
        onChange={updateState}
        className="edit"
        value={title}
        onKeyDown={(e) => saveEditingTodo(e, id, label)}
      />
    </li>
  );
}

Task.defaultProps = {
  id: 0,
  isCompleted: false,
  isEditing: false,
  label: 'something wrong',
  date: new Date(-8640000000000000),
  timer: 0,
  toggleComplete: () => {},
  deleteTodo: () => {},
  saveEditingTodo: () => {},
  startEditTodo: () => {},
};

Task.propTypes = {
  timer: PropTypes.number,
  id: PropTypes.number,
  isCompleted: PropTypes.bool,
  isEditing: PropTypes.bool,
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveEditingTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
};
