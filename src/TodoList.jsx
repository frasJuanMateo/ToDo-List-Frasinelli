import './App.css';
import React, {useState} from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleInputChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      
    }
    setNewTask("");
  };

  const removeTask = (index) => {
    const newList = tasks.filter(value => value !== tasks[index])
    setTasks(newList)
  }
  
  return (
    <div className="TodoList">
      
      <form onSubmit={addTask}>
        <h2>Lista de Tareas</h2>
        <ul>
          {tasks.map((value, index) => (<>
            <li key={index}>{value}</li>
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </>))}
        </ul>
        <p>Nueva tarea:</p>
        <input value={newTask} type="text" onChange={handleInputChange}></input>
        <button type="submit">Crear Tarea</button>
      </form>
      
    </div>
  )
}

export default TodoList;
