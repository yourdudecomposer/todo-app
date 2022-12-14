import './Footer.css';
import PropTypes from 'prop-types';

import TaskFilter from '../TasksFilter';

function Footer(props) {
  const count = props.todos.filter((el) => !el.isCompleted).length;
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TaskFilter filter={props.filter} onFilterChange={props.onFilterChange} />
      <button onClick={props.clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  todos: [],
  filter: 'all',
  clearCompleted: () => {},
  onFilterChange: () => {},
};

Footer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isCompleted: PropTypes.bool,
      isEditing: PropTypes.bool,
      id: PropTypes.number,
      date: PropTypes.instanceOf(Date),
    })
  ),
  filter: PropTypes.string,
  clearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func,
};
export default Footer;
