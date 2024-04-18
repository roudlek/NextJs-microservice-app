export default function TodoItem({ todo, onToggleTodo }) {
    const handleToggle = () => {

        onToggleTodo(todo.id);
      // Call onToggleTodo when the checkbox is clicked
      // Pass the todo id as an argument
    };
  
    return (
      <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
        {todo.text}
      </li>
    );
  }