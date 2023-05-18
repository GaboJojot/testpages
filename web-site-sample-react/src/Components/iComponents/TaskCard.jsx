import { FcCheckmark } from "react-icons/fc";



export const TaskCard = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3> 
      <p>{task.description}</p>
    </div>
  );
};
