import './Header.css';
import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

function Header(props) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTodo={props.addTodo} />
    </header>
  );
}

Header.defaultProps = {
  addTodo: () => {},
};
Header.propTypes = {
  addTodo: PropTypes.func,
};
export default Header;
