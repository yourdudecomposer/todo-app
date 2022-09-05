import './Main.css';

import Footer from '../Footer/Footer';
import TaskList from '../TaskList/TaskList';

function Main({ todos, toggleComplete }) {
    return (
        <section className='main'>
            <TaskList todos={todos} toggleComplete={toggleComplete} />
            <Footer />
        </section>

    )
}

export default Main;