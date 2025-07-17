import React from "react";
import Task from "./Task";
import { useTask } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useTask();

  const completedTask = tasks.filter((task) => task.completed) || [];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4 sm:max-h-[75%] sm:h-[75%] h-[80%] max-h-[80%]">
      <h2 className=" mx-auto mb-4 font-medium text-center base-content">
        <span className="border-b-2 mr-1">Your Tasks:</span>(
        <span className="text-sm font-semibold text-center text-secondary">
          {tasks ?
            `${Math.round(completedTask.length)}/${Math.round(tasks.length)}` : "0/0"}
        </span>
        )
      </h2>

      <div
        className={`${
          tasks.length > 2 ? "overflow-y-scroll" : "overflow-hidden"
        }  max-h-11/12 flex flex-col gap-2`}
      >
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id}>
              <Task task={task} />
            </div>
          ))
        ) : (
          <h3 className="bg-secondary-content/30 py-2 text-center text-sm rounded-lg dark:text-secondary text-secondary/50">
            No Task Yet!
          </h3>
        )}
      </div>
    </div>
  );
}

export default TaskList;
