import React from "react";

const AddTodo = () => {
  return (
    <div className="p-10">
      <form>
        <label className="mr-5">Enter the task:</label>
        <input className="rounded-md py-1 outline-none px-2" type="text" />
        <button className="rounded-md  bg-slate-600 text-white   text-md px-3 py-1 ml-5 hover:bg-slate-700 hover:text-gray-200">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
