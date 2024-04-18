import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  // let [isChecked, setIsChecked] = useState(false);

  //   state to manage the list of to-dos.
  let [todos, setTodos] = useState([]);

  function handleToggleTodo(todoId) {
    // Update todos state by mapping over the previous todos
    setTodos((prevTodos) => {
      // Toggle completion status of the specified todoId using if statements
      const newTodos = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            id: todo.id,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

      return newTodos;
    });
  }

  function handleAddTodo(newTodoText) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodoText, completed: false },
    ]);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={handleToggleTodo} />
        ))}
      </ul>
      <AddTodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}
