import { useEffect, useState } from "react";
import { Section } from "./Section.jsx";
import { TaskList } from "../../iComponents/TaskList.jsx";
import { Taskform } from "../../iComponents/Taskform.jsx";
import { tasks as data } from "../../../assets/Tasks.js";

export const PrincipalPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);

    
  }
  return (
    <>
      <h1>Conceptos claves en el Comercio Internacional</h1>
      <Section />
      <hr />

      <TaskList tasks={tasks} />
      <hr />
      <Taskform createTask={createTask} />
    </>
  );
};
