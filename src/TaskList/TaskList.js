import './TaskList.css';
import Task from '../Task/Task';
function TaskList({ todos, toggleComplete }) {

    const elements = todos.map(obj => {
        const { id, ...rest } = obj;
        return <Task key={id} {...rest} toggleComplete={()=>toggleComplete(id)} />
    })
    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    )
}

export default TaskList;