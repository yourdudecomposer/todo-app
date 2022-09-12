import './TasksFilter.css';
import React from 'react';

export default class TaskFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Completed' }
    ]


    render() {

        const buttons = this.buttons.map(({ name, label }) => {
            const clazz = name === this.props.filter ? 'selected' : null;
            return (
                <li key={name}>
                    <button
                        className={clazz}
                        onClick={() => this.props.onFilterChange(name)} >{label}
                    </button>
                </li>
            )
        })


        return (
            <ul className="filters">
                {buttons}
            </ul>
        )
    }
}

    // export default TaskFilter;

// }

// function TaskFilter(props) {

//     const filterHandler = (e) => {
//         if (e.target.tagName !== 'BUTTON') return;
//         props.changeFilterState(e.target.textContent)
//         changeClassOnBtn(e.target.textContent)
//     }


//     const changeClassOnBtn = (label) => {

//     }

//     return (
//         <ul onClick={filterHandler} className="filters">
//             <li>
//                 <button className="selected">All</button>
//             </li>
//             <li>
//                 <button >Active</button>
//             </li>
//             <li>
//                 <button>Completed</button>
//             </li>
//         </ul>
//     )
// }

// export default TaskFilter;