import React from "react";
import { todo } from "./Todos";
type props = {
  todo: todo;
  onChecked: Function;
};
const Todo = (props: props) => {
  const { todo, onChecked } = props;
  return (
    <div>
      <input
        onChange={() => onChecked(todo.id)}
        checked={todo.completed}
        className=""
        type="checkbox"
      />
      <span
        className={`ml-5 text-md ${
          todo.completed && "line-through text-gray-600"
        } `}
      >
        {todo.title}
      </span>
    </div>
  );
};

export default Todo;
