import { useState, useRef } from "react";
import { TfiArrowUp } from "react-icons/tfi";
export const Taskform = ({ createTask }) => {

  const form = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });

    form.current.reset();
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>
       agregar tarea <span></span>
        <TfiArrowUp/>
      </button>
    </form>
  );
};
