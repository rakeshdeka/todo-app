import { useState, useRef, useEffect } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { Header } from "./components/Header/Header";
import { useTodoContext } from "./API/Context/todoContext";

export default function HomePage() {
  const { todos, createTodo } = useTodoContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showTitleInput, setShowTitleInput] = useState(false);
  const inputContainerRef = useRef(null); // Reference to the container of the inputs
  const descriptionRef = useRef(null); // Reference to the description input

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (!showTitleInput) {
      setShowTitleInput(true);
    }
  };

  const handleAddTodo = async () => {
    if (title.trim() === "" || description.trim() === "") return;

    try {
      await createTodo(title, description);
      setTitle("");
      setDescription("");
      setShowTitleInput(false);
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleClickOutside = (event) => {
    if (
      inputContainerRef.current &&
      !inputContainerRef.current.contains(event.target)
    ) {
      setShowTitleInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Keep focus on the description input when title input is shown
    if (showTitleInput && descriptionRef.current) {
      descriptionRef.current.focus();
    }
  }, [showTitleInput]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <Header />
      <div className="flex flex-col items-center pt-8 pb-4">
        <div
          className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md"
          ref={inputContainerRef}
        >
            {showTitleInput && (
            <input
              className="w-full p-3 text-sm border-b border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter task title..."
              value={title}
              onChange={handleTitleChange}
              onKeyPress={handleKeyPress}
            />
          )}
          <textarea
            className="w-full p-3 mb-4 text-sms border-b border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Enter task description..."
            value={description}
            onChange={handleDescriptionChange}
            onFocus={() => setShowTitleInput(true)}
            onKeyPress={handleKeyPress}
            ref={descriptionRef}
          />
        
        </div>

        <div className="mt-8 w-full">
          {todos.length === 0 ? (
            <p className="text-center text-gray-600">
              No tasks available. Add a task to get started!
            </p>
          ) : (
            <TodoTask values={todos} />
          )}
        </div>
      </div>
    </div>
  );
}
