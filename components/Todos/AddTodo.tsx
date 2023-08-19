import React, { useRef } from "react";
import { todo } from "./Todos";
type props = {
  onAddTodo: Function;
};

const AddTodo = ({ onAddTodo }: props) => {
  const inputTask = useRef<HTMLInputElement>(null);
  const createTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const value = inputTask.current?.value;
    onAddTodo(value);
    if (inputTask.current) {
      inputTask.current.value = "";
    }
  };
  return (
    <div className="p-10">
      <form>
        <label className="mr-5">Enter the task:</label>
        <input
          ref={inputTask}
          className="rounded-md py-1 outline-none px-2"
          type="text"
        />
        <button
          onClick={createTodo}
          className="rounded-md  bg-slate-600 text-white   text-md px-3 py-1 ml-5 hover:bg-slate-700 hover:text-gray-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
