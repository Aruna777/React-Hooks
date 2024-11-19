import React, { useState } from "react";

function TaskManager() {
  const [tasks, settask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      settask([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    settask(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Task List Manager
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-md mt-6">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-3 border border-gray-300 rounded-md mb-3 bg-white"
          >
            <span className="text-lg text-gray-700">{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
