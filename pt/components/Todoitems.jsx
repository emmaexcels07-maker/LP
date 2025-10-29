import React from 'react';


export default function Todoitems( { todo, onToggle, onDelete } ) {
  return (
    <div className="flex items-center justify-center h-16 bg-black-400 rounded-md hover:bg-gray-200 p-2">
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5 cursor-pointer mr-4"
        />

        <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
        </span>

        <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700" 
        >
            Delete
        </button>
     
        <h2>Todo Items Component</h2>
    </div>
  );
}