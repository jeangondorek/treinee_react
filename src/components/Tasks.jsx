import React from 'react';

import Task from './Task';

const Tasks = ({tasks, handleAddTaskClick, handleTaskDeletion}) =>{
    return (
        <>
            {tasks.map((task) => 
            (<Task task={task} handleAddTaskClick ={handleAddTaskClick} handleTaskDeletion={handleTaskDeletion}/>)
            )}
        </>
    )
};

export default Tasks;