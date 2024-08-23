import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { BiSolidImageAdd } from "react-icons/bi";
import { useTodoContext } from "../../API/Context/todoContext";
// import UpdateTodoModal from "./UpdateTodoModal";
import UpdateTodoModal from "../Modal/UpdateTodoModal";

const TodoTask = ({ values }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { deleteTodo, fetchTodos } = useTodoContext();

  const handleHoverIconOver = (index) => {
    setIsMouseOver(true);
    setHoveredCardIndex(index);
  };

  const handleHoverIconOut = () => {
    setIsMouseOver(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleUpdate = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="border w-full h-full self-end text-center overflow-auto p-4">
        <div className="grid grid-cols-5 gap-2">
          {values?.map((value, index) => (
            <div
              key={index}
              className="mb-4 shadow-lg rounded-lg min-h-44 max-w-60 bg-gray-800 hover:bg-gray-900 text-white flex flex-col justify-between"
              onMouseOut={() => handleHoverIconOut(index)}
              onMouseOver={() => handleHoverIconOver(index)}
            >
              <div className="p-4 flex flex-col gap-2">
                <p
                  className="text-start focus:outline-none cursor-text break-words text-xl font-semibold"
                  tabIndex="0"
                  spellCheck="true"
                  aria-multiline="true"
                >
                  {value.title}
                </p>
                <p
                  className="text-start focus:outline-none cursor-text break-words text-base"
                  tabIndex="0"
                  spellCheck="true"
                  aria-multiline="true"
                >
                  {value.description}
                </p>
              </div>

              {isMouseOver && hoveredCardIndex === index && (
                <div className="flex gap-4 justify-end p-4 bg-gray-700 rounded-b-lg">
                  <MdDelete
                    className="hover:text-red-500 cursor-pointer"
                    title="Delete"
                    onClick={() => handleDelete(value._id)}
                  />
                  <BiSolidImageAdd
                    className="hover:text-purple-300 cursor-pointer"
                    title="Add Image"
                  />
                  {/* <IoMdColorPalette
                    className="hover:text-orange-400 cursor-pointer"
                    title="Add Color"
                  /> */}
                  <FiMoreVertical
                    className="hover:text-blue-400 cursor-pointer"
                    title="More"
                    onClick={() => handleUpdate(value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <UpdateTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        todo={selectedTodo}
      />
    </>
  );
};

export default TodoTask;
