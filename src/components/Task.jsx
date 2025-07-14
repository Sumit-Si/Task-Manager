import React from "react";
import { CheckCircle, Clock, Hourglass } from "lucide-react";
import { useTask } from "../context/TaskContext";
import EditModel from "./EditModel";

function Task({ task }) {
  console.log(task, "task");
  const {updateTask,deleteTask,toggleComplete} = useTask();
  const { id,title, description, completed } = task;

  const handleToggleTask = () => {
    toggleComplete(id);
  }

  const handleEditTask = () => {
    document.querySelector("#editModel")?.showModal();
  }

  const handleDeleteTask = () => {
    deleteTask(id)
  }

  return (
    <div className={`${completed ? "bg-secondary/10" : "bg-secondary/50"} rounded-lg p-3 shadow-md`}>
      <div className="flex items-center justify-between gap-1">
        <div className="flex-2/3 flex gap-3 items-center">
          <div>
            <input type="checkbox" className="cursor-pointer" checked={completed} onChange={handleToggleTask} name="" id="" />
          </div>
          <div>
            <h3 className={`${completed ? "line-through" : ""}`}>{title}</h3>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        </div>
        <div className="flex-1/3 flex gap-2 justify-end">
          <button className="btn" disabled={completed} onClick={handleEditTask}>Edit</button>
          <button className="btn" onClick={handleDeleteTask}>Delete</button>
          <EditModel id={id} title={title} description={description} />
        </div>
      </div>
    </div>
  );
}

export default Task;
