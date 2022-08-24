import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-slate-500 w-md mx-auto">
      <h2 className="font-bold text-4xl text-white text-center pt-4">To Do List</h2>
      <form className="flex flex-col gap-3 m-4 py-5" onSubmit={handleSubmit}>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-200 p-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Write a description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-200 p-2"
          cols="30"
          rows="6"
        />
        <button className="bg-green-400 hover:bg-green-600 rounded-sm">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
