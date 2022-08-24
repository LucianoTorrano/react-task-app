import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mt-4 min-w-fit">
      <h3 className="text-xl font-bold capitalize">{task.title}</h3>
      <p className="text-gray-300">{task.description}</p>
      <button
        className="bg-red-400 rounded-sm px-2 py-1 mt-4 hover:bg-red-800"
        onClick={() => deleteTask(task.id)}
      >
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
