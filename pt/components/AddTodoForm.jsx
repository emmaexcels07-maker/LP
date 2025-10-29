import React, {useState} from "react";



export default function AddTodoForm({onAdd}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        if (input.trim() === "") return;
        onAdd(input.trim());
        setInput("");
    }


  return (
    <form onSubmit={handleSubmit} className="mb-4">

        <div className="gap-2 flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
                className="flex-grow p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add
            </button>

        </div>

    </form>
  );
}
