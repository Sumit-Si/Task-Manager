import React, { useRef } from "react";
import AddTaskModel from "./AddTaskModel";

function Form() {
  const addModelRef = useRef(null);

  const handleAddTaskModel = () => {
    addModelRef.current?.showModal();
  };

  return (
    <>
      <div className="w-full max-h-[15%] h-[15%] flex p-1 items-center justify-center">
        <div
          className="flex-3/4 cursor-pointer hover:bg-secondary-content bg-secondary/10 hover:shadow-secondary-content shadow-md shadow-secondary/30 p-3 rounded-lg"
          onClick={handleAddTaskModel}
        >
          <h3 className="text-sm font-semibold text-center text-secondary">
            Add Todo
          </h3>
        </div>
        
      </div>
      <AddTaskModel addModelRef={addModelRef} />
    </>
  );
}

export default Form;
