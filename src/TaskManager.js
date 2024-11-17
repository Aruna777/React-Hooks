import React, { useState } from "react";

function TaskManager() {
  const [tasks, settask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim !== "") {
      settask([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    settask(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task List Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Add Task
      </button>
      <ul
        style={{
          marginTop: "20px",
          textAlign: "left",
          width: "300px",
          margin: "20px auto",
        }}
      >
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
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
