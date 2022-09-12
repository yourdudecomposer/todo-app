import './Header.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
function Header(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm addTodo={props.addTodo} />
        </header>
    )
}

export default Header;


