import React from "react";
import Task from "./Task";
import { useTask } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useTask();
  console.log(tasks, "tasks");

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="border-b-2 mx-auto w-fit mb-4 font-medium text-center base-content">
        Your Tasks
      </h2>

      {tasks.length > 0 ? (
        tasks.map((task) => <Task task={task} />)
      ) : (
        <h3 className="bg-secondary-content/30 py-2 text-center text-sm rounded-lg dark:text-secondary text-secondary/50">
          No Task Yet!
        </h3>
      )}
    </div>
  );
}

export default TaskList;
