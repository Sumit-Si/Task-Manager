import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {z} from "zod";


const taskSchema = z.object({
  task: z.string().trim().min(3, "Task must be at least 3 characters long"),
  description: z
    .string()
    .trim()
    .min(10, "Description should be at least 10 characters long")
    .optional(),
});

function AddTaskModel({addModelRef}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: title,
      description: description,
    },
  });

  const validateForm = (data) => {
    console.log(data, "data");
  };

  return (
    <dialog ref={addModelRef} className="modal">
      <div className="modal-box max-w-sm">
        <h3 className="font-bold text-lg text-center py-2 text-secondary">
          Add Task
        </h3>
        <form
          onSubmit={handleSubmit(validateForm)}
          className="flex flex-col py-4 gap-2"
          method="dialog"
        >
          <div className="">
            <div>
              <input
                className={`input input-secondary w-full ${
                  errors.task ? "input-error" : ""
                }`}
                type="text"
                {...register("task")}
                placeholder="Task..."
                name=""
                id=""
              />
            </div>
            {errors.task && (
              <p className="text-red-500 text-sm mt-1">{errors.task.message}</p>
            )}
          </div>
          <div className="mb-2">
            <div>
              <input
                className={`input input-secondary w-full ${
                  errors.description ? "input-error" : ""
                }`}
                type="text"
                {...register("description")}
                placeholder="Description..."
                name=""
                id=""
              />
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-secondary">
            Add
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <XIcon />
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default AddTaskModel;
