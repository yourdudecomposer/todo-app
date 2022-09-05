import './Task.css';
import { formatDistanceToNow } from 'date-fns';

function Task({ label, isCompleted, isEditing, date, toggleComplete }) {

    let liClass;
    const timeAgo = formatDistanceToNow(
        date,
        {
            includeSeconds: true,
            addSuffix: true
        }
    )


    if (isCompleted) {
        liClass = 'completed';
    } else if (isEditing) {
        liClass = 'editing'
    }

    return (
        <li className={liClass}>
            <div className="view">
                <input className="toggle" checked={isCompleted} type="checkbox" onChange={toggleComplete} />
                <label>
                    <span className="description" onClick={toggleComplete}>{label}</span>
                    <span className="created">created {timeAgo}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" defaultValue={label} />
        </li>


        // <div>
        //     <li className="completed">
        //         <div className="view">
        //             <input className="toggle" type="checkbox"/>
        //                 <label>
        //                     <span className="description">Completed task</span>
        //                     <span className="created">created 17 seconds ago</span>
        //                 </label>
        //                 <button className="icon icon-edit"></button>
        //                 <button className="icon icon-destroy"></button>
        //         </div>
        //     </li>
        //     <li className="editing">
        //         <div className="view">
        //             <input className="toggle" type="checkbox"/>
        //                 <label>
        //                     <span className="description">Editing task</span>
        //                     <span className="created">created 5 minutes ago</span>
        //                 </label>
        //                 <button className="icon icon-edit"></button>
        //                 <button className="icon icon-destroy"></button>
        //         </div>
        //         <input type="text" className="edit" defaultValue="Editing task"/>
        //     </li>
        //     <li>
        //         <div className="view">
        //             <input className="toggle" type="checkbox"/>
        //                 <label>
        //                     <span className="description">Active task</span>
        //                     <span className="created">created 5 minutes ago</span>
        //                 </label>
        //                 <button className="icon icon-edit"></button>
        //                 <button className="icon icon-destroy"></button>
        //         </div>
        //     </li>
        // </div>
    )
}

export default Task;