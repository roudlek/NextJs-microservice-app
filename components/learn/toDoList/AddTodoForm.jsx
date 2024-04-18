import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the newTodo is not empty before adding it
    if (newTodo.trim() !== "") {
      // Call onAddTodo with the new todo text as an argument
      onAddTodo(newTodo);

      // Use setNewTodo to clear the input field
      setNewTodo("");
      console.log(newTodo);
    }
  };

  return (
    <form
      className="grid grid-cols-2 gap-5 m-10 p-10 bg-neutral-darkGrayishBlue rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        // value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        //   console.log(e);
        }}
        placeholder="Enter a new todo"
      />
      <button className="bg-primary-cream hover:bg-neutral-white" type="submit">
        Add Todo
      </button>
    </form>
  );
}
