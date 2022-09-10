import react, {useState} from 'react';
import './App.css';
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

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
    )
};

export default App;