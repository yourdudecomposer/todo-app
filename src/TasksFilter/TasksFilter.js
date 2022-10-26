import './TasksFilter.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function TaskFilter({ filter, onFilterChange }) {
  const buttonsArr = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Completed' },
  ];

  const buttons = buttonsArr.map(({ name, label }) => {
    const clazz = name === filter ? 'selected' : null;
    return (
      <li key={name}>
        <button className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
}

TaskFilter.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
};
TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
