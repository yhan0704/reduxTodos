import React, { useState } from "react";

export default function Todos({ todos, onCreate, onToggle }) {
    
  const [input, setInput] = useState("");

  //   const TodoItem = ({ todo, onToggle }) => {
  //     console.log(todo)
  //   };

  const TodoList = ({todos, onToggle}) => {
    console.log(todos);
    
    return 0
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
