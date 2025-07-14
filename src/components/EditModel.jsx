import React, { useState } from "react";
import { useTask } from "../context";

function EditModel({ id,title, description }) {
    const {updateTask} = useTask();
  const [task, setTask] = useState("");
  const [descr, setDescr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(id,{title,description});
    // setTask("");
    // setDescr("");
  };

  return (
    <dialog id="editModel" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-200">
        <h3 className="font-bold text-xl text-center mb-4">📝 Edit Task</h3>

        <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Task</span>
            </label>
            <input
              type="text"
              name="task"
              placeholder="Task"
              className="input input-bordered w-full"
              required
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Description..."
              className="textarea textarea-bordered w-full"
              rows={4}
              required
              onChange={(e) => setDescr(e.target.value)}
              value={descr}
            ></textarea>
          </div>

          <div className="modal-action justify-center">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default EditModel;
