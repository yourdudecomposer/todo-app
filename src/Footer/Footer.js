import './Footer.css';
import TaskFilter from '../TasksFilter/TasksFilter';

function Footer(props) {
    const count = props.todos.filter(el => !el.isCompleted).length;
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <TaskFilter
                filter={props.filter}
                onFilterChange={props.onFilterChange} />
            <button
                onClick={props.clearCompleted}
                className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;