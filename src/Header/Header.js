import './Header.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import PropTypes from 'prop-types';


function Header(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm addTodo={props.addTodo} />
        </header>
    )
}

Header.defaultProps = {
    addTodo: () => { }
}
Header.propTypes = {
    addTodo: PropTypes.func
}
export default Header;


