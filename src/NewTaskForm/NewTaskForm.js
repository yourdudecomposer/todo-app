import './NewTaskForm.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTaskForm(props) {
  const { addTodo } = props;
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onTodoInput = (e) => {
    setLabel(e.target.value);
  };
  const onMinInput = (e) => {
    setMin(e.target.value);
  };
  const onSecInput = (e) => {
    setSec(e.target.value);
  };

  const submitTheForm = (e) => {
    e.preventDefault();
    addTodo(e.target);
    setLabel('');
    setMin('');
    setSec('');
  };

  return (
    <form className="new-todo-form" onSubmit={submitTheForm}>
      <input required className="new-todo" placeholder="Task" autoFocus onChange={onTodoInput} value={label} />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        min={0}
        onChange={onMinInput}
        value={min}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        min={0}
        // max={60}
        onChange={onSecInput}
        value={sec}
      />
      <input type="submit" value="" />
    </form>
  );
}

NewTaskForm.defaultProps = {
  addTodo: () => {},
};
NewTaskForm.propTypes = {
  addTodo: PropTypes.func,
};
