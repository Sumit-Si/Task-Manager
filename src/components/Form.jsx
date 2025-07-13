import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

function Form() {
  const {addTask} = useTask();
  const [task,setTask] = useState("");
  const [descr,setDescr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({"title": task,"description":descr})
    setTask("");
    setDescr("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex p-1">
      <div className="flex-[80%] flex gap-1 pr-2">
        <input
          type="text"
          placeholder="Task"
          value={task}
          name="task"
          onChange={(e) => setTask(e.target.value)}
          className="input input-neutral dark:input-secondary shadow-md border-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={descr}
          name="desc"
          onChange={(e) => setDescr(e.target.value)}
          className="textarea input-neutral dark:input-secondary shadow-md border-2 w-full">
        </textarea>
      </div>
      <button type="submit" className="flex-[15%] btn btn-secondary dark:btn-secondary/90 inline-block shadow-lg shadow-secondary/20">Add</button>
    </form>
  );
}

export default Form;
