import "./InputTask.scss";

const InputTask = (props) => {

  const {task, handleInput, addTask}=props;
  return (
    <div className="input">
        <input className='input__text'
            type="text" 
            onChange={handleInput}
            value={task}
        />
        <button type="submit" className="input__button" onClick={addTask}>+</button>
    </div>
  )
}

export default InputTask