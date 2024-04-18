import { useEffect, useRef, useState } from "react";

export default function MyTodoApp() {
  // let[isChecked, setIsChecked] = useState(false);
  let [todos, setTodos] = useState([]);
  let [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTodo() {
    if (todoInput !== "") {
      // setTodos(todos.concat(todoInput));
      // setTodos((prevTodos) => [todoInput].concat(prevTodos));

      // setTodos((current) => [todoInput, ...current]);
      // adding element in last 
    //   setTodos((prevTodos) => [...prevTodos, todoInput]);
        setTodos((prevTodos)=> prevTodos.concat(todoInput));
      // we clear the input text
      setTodoInput("");
    }
  }

  return (
    <>
      <TodoForm
        todoInput={todoInput}
        onClickTodo={addTodo}
        setTodoInput={setTodoInput}
      />
      <ListOfTodos todoListArray={todos} />
    </>
  );
}

function TodoForm({ todoInput, setTodoInput, onClickTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo here"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button type="submit" onClick={() => onClickTodo()}>
        Add Todo
      </button>
    </div>
  );
}

function ListOfTodos({ todoListArray }) {
  return (
    <div>
      <h2>List of Todos</h2>
      {todoListArray.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" />
          {todo}
        </div>
      ))}
    </div>
  );
}
