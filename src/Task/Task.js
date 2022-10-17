import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';

export default function Task(props) {
  const timeAgo = formatDistanceToNow(props.date, {
    includeSeconds: true,
    addSuffix: true,
  });

  let liClass = '';

  const [label, setLabel] = useState(props.label);

  const updateState = (e) => {
    setLabel(e.target.value);
  };

  if (props.isCompleted && props.isEditing) {
    liClass = 'editing';
  } else if (props.isCompleted) {
    liClass = 'completed';
  } else if (props.isEditing) {
    liClass = 'editing';
  } else liClass = '';

  return (
    <li className={liClass}>
      <div className="view">
        <input className="toggle" checked={props.isCompleted} type="checkbox" onChange={props.toggleComplete} />
        <label htmlFor="">
          <span className="title" onClick={props.toggleComplete}>
            {label}
          </span>
          <Timer isCompleted={props.isCompleted} timer={props.timer} />
          <span className="description">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit" onClick={() => props.startEditTodo(props.id)}></button>
        <button className="icon icon-destroy" onClick={props.deleteTodo}></button>
      </div>
      <input
        type="text"
        onChange={updateState}
        className="edit"
        value={label}
        onKeyDown={(e) => props.saveEditingTodo(e, props.id, label)}
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
