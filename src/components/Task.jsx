import React, { useRef } from "react";
import { useTask } from "../context/TaskContext";
import EditModel from "./EditModel";
import { Pencil, Trash } from "lucide-react";

function Task({ task }) {
  const editModelRef = useRef(null);
  const { updateTask, deleteTask, toggleComplete } = useTask();
  const { id, title, description, completed } = task;

  const handleToggleTask = () => {
    toggleComplete(id);
  };

  const handleEditTask = () => {
    editModelRef.current?.showModal();
  };

  const handleUpdateTask = (data) => {
    if (completed) return;
    updateTask(id, {
      ...task,
      title: data.task,
      description: data.description,
    });

    editModelRef.current?.close();
  };

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <div
      className={`${
        completed ? "bg-secondary/10" : "bg-secondary/50"
      } rounded-lg p-3 shadow-md`}
    >
      <div className="flex items-center justify-between gap-1">
        <div className="flex-2/3 flex gap-3 items-center">
          <div>
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={completed}
              onChange={handleToggleTask}
            />
          </div>
          <div>
            <h3 className={`${completed && "line-through"} font-semibold`}>
              {title}
            </h3>
            <p className="text-xs text-base-content/70 text-wrap line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        <div className="flex-1/3 flex gap-2 justify-end">
          <button
            className="bg-secondary-content cursor-pointer p-1 rounded-md shadow-md shadow-secondary-content/50 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={completed}
            onClick={handleEditTask}
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            className="bg-secondary-content cursor-pointer p-1 rounded-md shadow-md shadow-secondary-content/50"
            onClick={handleDeleteTask}
          >
            <Trash className="w-5 h-5 text-error" />
          </button>
          <EditModel
            handleUpdateTask={handleUpdateTask}
            editModelRef={editModelRef}
            title={title}
            description={description}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;
