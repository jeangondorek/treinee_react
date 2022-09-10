import React, { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estidas progs',
      completed: false,
    },
    {
      id:'2',
      title: 'ser feliozx',
      completed: true,
    },
    {
      id:'3',
      title: 'estudar progh',
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
    )
};

export default App;