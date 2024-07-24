import './App.css';
import React, {useState} from "react";

function TodoList() {
  const categories = ["Estudio", "Hogar", "Salud", "Ocio", "Otro"]
  const [currentCategory, setCurrentCategory] = useState("Todas");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({text: "", category:categories[0], id: 0});


  const handleInputChange = (e) => {
    e.preventDefault();

    if (e.target.id === "task") setNewTask({...newTask , text: e.target.value});
    
    if (e.target.id === "category") setNewTask({...newTask , category: e.target.value});
    
    if (e.target.id === "filter") setCurrentCategory(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.text.trim() !== "") {
      setTasks([...tasks, newTask]);
      console.log(newTask)
    }
    setNewTask({text: "", category: newTask.category, id: newTask.id + 1});
  };

  const removeTask = (index) => {
    const newList = tasks.filter(value => value.id !== index)
    setTasks(newList)
  }
  
  return (
    <div className="TodoList">
      
      <form onSubmit={addTask}>
        <h2>Lista de Tareas</h2>
        <select value={currentCategory} id="filter" onChange={handleInputChange}>
          {categories.map((value) => <option>{value}</option>)}
          <option>Todas</option>
        </select>
        <ul>
          
          {currentCategory === "Todas"
          ? tasks.map((object) => 
            (<div class="container">
              <li key={object.id}>{object.text} <p>{object.category}</p></li>
              <button onClick={() => removeTask(object.id)}>Eliminar</button>
            </div>)) 
          : tasks.filter(value => value.category == currentCategory).map((object) => 
            (<div class="container">
              <li key={object.id}>{object.text} <p>{object.category}</p></li>
              <button onClick={() => removeTask(object.id)}>Eliminar</button>
            </div>))}
        </ul>
        <p>Nueva tarea:</p>
        <input value={newTask.text} id="task" type="text" onChange={handleInputChange}></input>
        <select value={newTask.category} id="category" onChange={handleInputChange}>
          {categories.map((value) => <option>{value}</option>)}
        </select>
        <button type="submit">Crear Tarea</button>
      </form>
      
    </div>
  )
}

export default TodoList;
