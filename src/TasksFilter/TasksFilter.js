import './TasksFilter.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class TaskFilter extends React.Component {
          static defaultProps = {
                    filter: 'all',
                    onFilterChange: () => {},
          };
          static propTypes = {
                    filter: PropTypes.string,
                    onFilterChange: PropTypes.func,
          };

          buttons = [
                    { name: 'all', label: 'All' },
                    { name: 'active', label: 'Active' },
                    { name: 'done', label: 'Completed' },
          ];

          render() {
                    const buttons = this.buttons.map(({ name, label }) => {
                              const clazz = name === this.props.filter ? 'selected' : null;
                              return (
                                        <li key={name}>
                                                  <button
                                                            className={clazz}
                                                            onClick={() => this.props.onFilterChange(name)}
                                                  >
                                                            {label}
                                                  </button>
                                        </li>
                              );
                    });

                    return <ul className="filters">{buttons}</ul>;
          }
}
