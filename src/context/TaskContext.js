import { createContext, useContext } from "react";

export const TaskContext = createContext({
  theme: "winter",
  tasks: [
    {
      id: 1,
      title: "read book in english",
      description: "read book",
      completed: false,
    },
  ],
  addTask: (task) => {},
  updateTask: (id, task) => {},
  deleteTask: (id) => {},
  toggleComplete: (id) => {},
  lightTheme: () => {},
  darkTheme: () => {},
});

export const TaskProvider = TaskContext.Provider;

export const useTask = () => {
  return useContext(TaskContext);
};
