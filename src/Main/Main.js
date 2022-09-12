import './Main.css';

import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

function Main({
    todos,
    toggleComplete,
    deleteTodo,
    clearCompleted,
    filter,
    onFilterChange,
    saveEditingTodo,
    startEditTodo
}) {
    return (
        <section className='main'>
            <TaskList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                saveEditingTodo={saveEditingTodo}
                startEditTodo={startEditTodo}
            />
            <Footer
                todos={todos}
                clearCompleted={clearCompleted}
                filter={filter}
                onFilterChange={onFilterChange} />
        </section>

    )
}

export default Main;

