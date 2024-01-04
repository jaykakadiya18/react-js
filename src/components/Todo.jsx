import React, { useState } from "react";
// import './App.css';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  function removeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-3xl text-white font-bold mb-6">My To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="text-white font-semibold mx-5" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-white font-semibold mx-5">
            {task}
            <button
              onClick={() => removeTask(index)}
              className="mx-5 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default Todo;
