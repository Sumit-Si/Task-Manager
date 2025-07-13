import React from "react";
import { CheckCircle, Clock, Hourglass } from "lucide-react";
import { useTask } from "../context/TaskContext";

function Task({ task }) {
  console.log(task, "task");
  const {updateTask,deleteTask,toggleComplete} = useTask();
  const { id,title, description, completed } = task;

  const handleUpdateTask = (e) => {

  }

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  return (
    <div className="rounded-lg p-3 bg-secondary/10 shadow-md">
      <div className="flex items-center justify-between gap-1">
        <div className="flex-2/3 flex gap-3 items-center">
          <div>
            <input type="checkbox" checked={completed} disabled name="" id="" />
          </div>
          <div>
            <h3 className="">{title}</h3>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        </div>
        <div className="flex-1/3 flex gap-2 justify-end">
          <button className="btn" onClick={handleUpdateTask}>Edit</button>
          <button className="btn" onClick={handleDeleteTask}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
