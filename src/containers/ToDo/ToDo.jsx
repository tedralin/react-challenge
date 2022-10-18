import React, {useState} from 'react';
import trash from "../../assets/images/trash.png";
import "./ToDo.scss";
import InputTask from '../../components/InputTask/InputTask';
import TaskList from '../../components/TaskList/TaskList';

const ToDo = (props) => {
  const [newTask, setNewTask] = useState("");
  const [allTasksArray, updateTasks] = useState([]);
  const [taskID, incrementTaskID] = useState(0);


  const resetPage = () => {
    setNewTask ("");
    updateTasks ([]);
    incrementTaskID(0);
  }

  const handleChangeInput = event => {
    setNewTask (event.target.value); 
  }

  const addTask = () => {
    const taskDetails = {id: taskID, taskName: newTask, done: false }
    if (newTask) {
      updateTasks (current => [...current, taskDetails ])
      setNewTask ("");  
      incrementTaskID (taskID + 1);
    }
  }

  const toggleTaskDone = (toggleId) => {
    const updatedTaskArray = allTasksArray.map(task => {
        return task.id === toggleId ? {...task, done: !task.done} : {...task}
    } )
    updateTasks (updatedTaskArray);
  }

  const removeTask = (idx) => {
    const filteredTaskArray = allTasksArray.filter(task => {
        return task.id !== idx;
    })
    updateTasks(filteredTaskArray);
  }

  
  const taskList = allTasksArray.map((task, index) => (
    <div key={task.id} className="taskRow">
        <div className={task.done ? 'checkTask taskDone': 'checkTask'}>
            <input type="checkbox" checked={task.done} onChange={(event) => toggleTaskDone(task.id)}></input>
            <div>{task.taskName}</div> 
        </div>
        {/* <img src={trash} alt="delete" onClick={(event) => removeTask(task.id)}  /> */}
        <img src={trash} alt="delete" onClick={removeTask(task.id)}  />
    </div>
  ));


  return (
    <>
        <header className="header">
            <h2>My ToDos</h2>
            <button className='header__reset' onClick={resetPage}>Reset</button>
        </header>

        <InputTask task={newTask} handleInput={handleChangeInput} addTask={addTask}/>
        <TaskList taskList = {taskList} />
    </>
  )
}

export default ToDo