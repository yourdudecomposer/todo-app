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
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(this.state.label);
          this.setState({
            label: '',
          });
        }}
      >
        <input className="new-todo" placeholder="Task" autoFocus onChange={this.onTodoInput} value={this.state.label} />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      </form>
    );
  }
}
//jk
