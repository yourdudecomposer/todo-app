import './NewTaskForm.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  state = {
    label: '',
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

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(this.state.label);
          this.setState({
            label: '',
          });
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onTodoInput}
          value={this.state.label}
        />
      </form>
    );
  }
}
