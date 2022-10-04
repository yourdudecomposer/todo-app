import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';

export default class Task extends React.Component {
  static defaultProps = {
    id: 0,
    isCompleted: false,
    isEditing: false,
    label: 'something wrong',
    date: new Date(-8640000000000000),
    toggleComplete: () => {},
    deleteTodo: () => {},
    saveEditingTodo: () => {},
    startEditTodo: () => {},
  };

  static propTypes = {
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

  timeAgo = formatDistanceToNow(this.props.date, {
    includeSeconds: true,
    addSuffix: true,
  });

  liClass = '';

  state = {
    text: this.props.label,
  };

  updateState = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    if (this.props.isCompleted && this.props.isEditing) {
      this.liClass = 'editing';
    } else if (this.props.isCompleted) {
      this.liClass = 'completed';
    } else if (this.props.isEditing) {
      this.liClass = 'editing';
    } else this.liClass = '';

    return (
      <li className={this.liClass}>
        <div className="view">
          <input
            className="toggle"
            checked={this.props.isCompleted}
            type="checkbox"
            onChange={this.props.toggleComplete}
          />
          <label>
            <span className="description" onClick={this.props.toggleComplete}>
              {this.props.label}
            </span>
            <Timer />
            <span className="created">created {this.timeAgo}</span>
          </label>
          <button className="icon icon-edit" onClick={() => this.props.startEditTodo(this.props.id)}></button>
          <button className="icon icon-destroy" onClick={this.props.deleteTodo}></button>
        </div>
        <input
          type="text"
          onChange={this.updateState}
          className="edit"
          value={this.state.text}
          onKeyDown={(e) => this.props.saveEditingTodo(e, this.props.id, this.state.text)}
        />
      </li>
    );
  }
}
