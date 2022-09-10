import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import './Task.css';

const Task= ({task, handleAddTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetailsCheck = () => {
        history.push(`/${task.title}`);
    };

    return (<div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}> 
        <div className='task-title' onClick={()=>handleAddTaskClick(task.id)}>
            {task.title}
        </div>
        <div className='buttons-container'>
            <button onClick={() => handleTaskDeletion(task.id)} className='remove-task-button'><CgClose /></button>
            <button onClick={handleTaskDetailsCheck} className='see-task-button'><CgInfo /></button>
        </div>
    </div>);
}
 
export default Task;