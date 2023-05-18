import { TaskCard } from "./TaskCard";
export function TaskList ({ tasks })  {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún.</h1>;
  }
  return (
    <div className="container-task-list">
      <h2>Lista de tareas pendientes:</h2>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
};
