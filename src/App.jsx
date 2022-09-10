import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

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

  const handleAddTaskClick = (taskId) =>{
    const newTasks = tasks.map(task =>{
      if (task.id === taskId) return {...task, completed: !task.completed};

      return task;
    });

    setTasks(newTasks);
};

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion= (taskId) => {
    const newTasks = tasks.filter(task=> task.id !== taskId);
      
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path='/' exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleAddTaskClick={handleAddTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}/>
        <Route path='/:taskTitle' exact component={TaskDetails}/>
      </div>
    </Router>
    )
};

export default App;