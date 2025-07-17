import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const taskSchema = z.object({
  task: z.string().trim().min(3, "Task must be at least 3 characters long"),
  description: z
      .string()
      .trim()
      .min(10, "Description should be at least 10 characters long")
      .optional(),
});

function EditModel({ title, description, editModelRef, handleUpdateTask }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: title,
      description:description
    }
  });

  const validateForm = (data) => {
    if(data) {
      handleUpdateTask(data);
    }
  };

  return (
    <dialog ref={editModelRef} className="modal">
      <div className="modal-box max-w-sm">
        <h3 className="font-bold text-lg text-center py-2 text-secondary">
          Edit Task
        </h3>
        <form
          onSubmit={handleSubmit(validateForm)}
          className="flex flex-col py-4 gap-2"
          method="dialog"
        >
          <div className="">
            <div>
              <input
                className={`input w-full ${
                  errors.task ? "input-error" : "input-secondary"
                }`}
                type="text"
                {...register("task")}
                placeholder="Task..."
              />
            </div>
            {errors.task && (
              <p className="text-red-500 text-sm mt-1">{errors.task.message}</p>
            )}
          </div>
          <div className="mb-2">
            <div>
              <textarea
                className={`input w-full max-h-[10em] h-[10em] ${
                  errors.description ? "input-error" : "input-secondary"
                }`}
                {...register("description")}
                placeholder="Description..."
              ></textarea>
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-secondary">
            Update
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

export default EditModel;
