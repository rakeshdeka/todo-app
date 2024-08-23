import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
// import { useTodoContext } from "../../API/Context/todoContext";
import { useTodoContext } from "../../API/Context/todoContext";

const UpdateTodoModal = ({ isOpen, onClose, todo }) => {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const { updateTodo, fetchTodos } = useTodoContext();

  useEffect(() => {
    setTitle(todo?.title || "");
    setDescription(todo?.description || "");
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(todo._id, { title, description });
      fetchTodos();
      onClose(); // Close modal on successful update
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Update Todo</h2>
          <IoClose className="text-gray-500 cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default UpdateTodoModal;
