import React, { useState } from "react";

export default function Todos({ todos, onCreate, onToggle }) {
    
  const [input, setInput] = useState("");

    const TodoItem = ({ todo, onToggle }) => {
      return(
        <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </li>
      )
    };

  const TodoList = ({todos, onToggle}) => {
    return (
      todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)
    )
  };

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}></input>
        <button type="submit">Create</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle}></TodoList>
    </div>
  );
}
