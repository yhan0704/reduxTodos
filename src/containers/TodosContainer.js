import React from "react";
import { addTodos, toggle } from "../modules/todos";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";

export default function TodosContainer() {
  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const onCreate = (text) => {
    dispatch(addTodos(text));
  };
  const onToggle = (id) => {
    dispatch(toggle(id));
  };

  return (
    <div>
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}></Todos>
    </div>
  );
}
