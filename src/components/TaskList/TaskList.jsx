import "./TaskList.scss";

const TaskList = (props) => {
  const {taskList} = props;
  
  return (
    <div className='taskContainer'>
        {taskList}
    </div>

  )
}

export default TaskList