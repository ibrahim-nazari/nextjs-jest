"use client";
import { getTodos } from "@/src/generateTodos";
import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
export type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const Todos = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  const handleAddTodo = (value: string) => {
    const newTodo: todo = {
      userId: 2,
      id: todos.length,
      completed: false,
      title: value,
    };
    setTodos([...todos, newTodo]);
  };
  const handleCheck = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        if (todo.completed) {
          todo.completed = false;
        } else {
          todo.completed = true;
        }
      }
      return todo;
    });
    setTodos([...newTodos]);
  };
  const completedTasks = todos.filter((todo) => todo.completed);
  const remainingTasks = todos.filter((todo) => !todo.completed);
  return (
    <div className="container mx-auto mt-20 bg-slate-300 p-4">
      <AddTodo onAddTodo={handleAddTodo} />
      <h2 className="text-center text-xl font-semibold">Tasks</h2>
      {todos.map((todo) => (
        <Todo onChecked={handleCheck} key={todo.id} todo={todo} />
      ))}

      <div className="mt-10 px-2 flex justify-between align-center">
        <div>
          {remainingTasks.length == 0
            ? "No task remaining"
            : remainingTasks.length == 1
            ? "1 task remaining"
            : `${remainingTasks.length} tasks remaining`}
        </div>
        <div>
          {completedTasks.length == 0
            ? "No task completed"
            : completedTasks.length == 1
            ? "1 task completed"
            : `${completedTasks.length} tasks completed`}
        </div>
      </div>
    </div>
  );
};

export default Todos;
