import './NewTaskForm.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  state = {
    label: '',
    min: '',
    sec: '',
  };

  static defaultProps = {
    addTodo: () => {},
  };
  static propTypes = {
    addTodo: PropTypes.func,
  };

  onTodoInput = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onMinInput = (e) => {
    this.setState({
      min: e.target.value,
    });
  };
  onSecInput = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  render() {
    return (
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(e.target);
          this.setState({
            label: '',
            min: '',
            sec: '',
          });
        }}
      >
        <input
          required
          className="new-todo"
          placeholder="Task"
          autoFocus
          onChange={this.onTodoInput}
          value={this.state.label}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={this.onMinInput}
          value={this.state.min}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={this.onSecInput}
          value={this.state.sec}
        />
        <input type="submit" value="" />
      </form>
    );
  }
}
//jk
