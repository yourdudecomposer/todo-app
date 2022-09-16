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
