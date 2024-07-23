// import logo from './logo.svg';
import React from "react";
// import Select from 'react-select';
import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div style = {{ backgroundColor: task.completed ? "green" : "white" }}>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
              <button onClick={() => completeTask(task.id)}>Complete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
