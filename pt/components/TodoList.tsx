import React from "react";
import Todoitems from "./Todoitems";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos available</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <Todoitems
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}