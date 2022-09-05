import './Footer.css';
import TaskFilter from '../TasksFilter/TasksFilter';

function Footer() {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TaskFilter />
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;