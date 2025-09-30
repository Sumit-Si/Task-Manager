import { useEffect, useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { ThemeToggle, Form, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  const lightTheme = () => {
    setTheme("winter");
  };

  const darkTheme = () => {
    setTheme("night");
  };

  const addTask = (task) => {
    setTasks((prev) => [...prev, { id: uuidv4(), ...task }]);
  };

  const updateTask = (id, task) => {
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? task : prevTask))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((prevTask) => prevTask.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", "");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);

    if (tasks && tasks.length > 0) setTasks(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskProvider
      value={{
        tasks,
        theme,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete,
        lightTheme,
        darkTheme,
      }}
    >
      <div className="h-screen w-full flex flex-col gap-1 justify-center items-center">
        <div className="flex shrink-0 max-w-[90%] w-[80%] lg:max-w-1/2 lg:w-1/2 p-3 rounded-lg border border-secondary/30 shadow-md justify-between items-center">
          <h1 className="font-semibold text-2xl text-secondary dark:text-secondary">
            Task Manager
          </h1>
          <ThemeToggle />
        </div>
        <div className="shrink-0 max-w-[90%] w-[80%] lg:max-w-1/2 lg:w-1/2 max-h-[80%] sm:max-h-[65%] h-[80%] sm:h-[65%] p-2 rounded-lg border border-secondary/30 shadow-md flex items-center justify-center flex-col gap-1">
          <Form />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
