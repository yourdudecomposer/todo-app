import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';

export default function Task(props) {
  const { id, isCompleted, label, date, timer, toggleComplete, deleteTodo, saveEditingTodo } = props;
  const timeAgo = formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
  });

  const [title, setTitle] = useState(label);

  const [isEdit, setIsEdit] = useState(false);
  const [liClass2, setLiClass2] = useState('');

  const startEditTodo = () => {
    setIsEdit(true);
  };

  const updateState = (e) => {
    setTitle(e.target.value);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      setIsEdit(false);
    }
    saveEditingTodo(e, id, title);
  };
  useEffect(() => {
    isEdit ? setLiClass2('editing') : setLiClass2('');
  }, [isEdit]);
  useEffect(() => {
    isCompleted ? setLiClass2('completed') : setLiClass2('');
  }, [isCompleted]);

  return (
    <li className={liClass2}>
      <div className="view">
        <input className="toggle" checked={isCompleted} type="checkbox" onChange={toggleComplete} />
        <label htmlFor="">
          <span className="title" onClick={toggleComplete}>
            {title}
          </span>
          <Timer isCompleted={isCompleted} timer={timer} />
          <span className="description">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit" onClick={startEditTodo}></button>
        <button className="icon icon-destroy" onClick={deleteTodo}></button>
      </div>
      <input type="text" onChange={updateState} className="edit" value={title} onKeyDown={(e) => onPressEnter(e)} />
    </li>
  );
}

Task.defaultProps = {
  id: '',
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
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  isEditing: PropTypes.bool,
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  saveEditingTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
};
