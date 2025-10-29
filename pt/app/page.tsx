"use client";

import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import type { Todo } from "../components/types";
import Userprofiles from "./user/page.jsx"


// Main Home component
export default function Home() {

  // Function state to hold the list of to-do items
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Next.js", completed: false },
    { id: 2, text: "Build a to-do app", completed: false },
    { id: 3, text: "Deploy to Vercel", completed: false },
  ]);

  // Function to add a new to-do item
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completion status of a to-do item
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (selectedId: number) => {
    setTodos(todos.filter((todo) => todo.id !== selectedId));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-2*1 p-8">
        <h1 className="text-4*1 font-bold md8 text-center">
          To-Do List
        </h1>
        <AddTodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <div className="mt-8 text-center text-sm text-gray-500">
          {todos.filter((todo) => !todo.completed).length} items left
        </div>
      </div>
    </main>
  );
}