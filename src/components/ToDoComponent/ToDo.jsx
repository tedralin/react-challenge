import React, {useState} from 'react';
import trash from "../../assets/images/trash.png";
import "./ToDo.scss";

const ToDo = (props) => {
  const [newTask, setNewTask] = useState("");
  const [allTasksArray, updateTasks] = useState([]);
  const [taskID, incrementTaskID] = useState(0);


  const resetPage = () => {
    console.log ("reset is clicked")
    setNewTask ("");
    updateTasks ([]);
    incrementTaskID(0);
  }

  const handleChangeInput = event => {
    setNewTask (event.target.value); 
  }

  const addTask = () => {
    const taskDetails = {id: taskID, taskName: newTask, done: false }
    updateTasks (current => [...current, taskDetails ])
    setNewTask ("");  
    incrementTaskID (taskID + 1);
  }

  const toggleTaskDone = (toggleId) => {
    console.log(`checkbox in task ${toggleId} is clicked`)
    const updatedTaskArray = allTasksArray.map(task => {
        console.log ("index: " + toggleId + "id: ", task.id + " task:" + task.taskName + " done:" + task.done );
        return task.id === toggleId ? {...task, done: !task.done} : {...task}
    } )
    updateTasks (updatedTaskArray);
  }

  const removeTask = (idx) => {
    console.log(`remove task ${idx}: ${allTasksArray[idx]} `);
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
        <img src={trash} alt="delete" onClick={(event) => removeTask(task.id)}  />
    </div>
  ));



  return (
    <>
        <header className="header">
            <h2>My ToDos</h2>
            <button className='header__reset' onClick={resetPage}>Reset</button>
        </header>

        <div className="input">
            <input className='input__text'
                type="text" 
                onChange={handleChangeInput}
                value={newTask}
            />
            <button type="submit" className="input__button" onClick={addTask}>+</button>
        </div>
        <div className='taskContainer'>
            {taskList}
        </div>
    </>
  )
}

export default ToDo