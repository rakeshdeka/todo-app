import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GrFormAdd } from "react-icons/gr";
import SignInModal from "./components/Authentication/SignInModal/SignInModal";
import { useTodoContext } from "./API/Context/todoContext";

export default function HomePage() {
  const { todos, createTodo } = useTodoContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openSignInModal, setOpenSignInModal] = useState(false);
  console.log("todos......", todos);
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = async () => {
    if (title.trim() === "") return; // Prevent empty titles from being created

    try {
      await createTodo(title, description); // Pass both title and description
      setTitle(""); // Clear title input after adding
      setDescription(""); // Clear description input after adding
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-200">
        {/* header */}
        <Header setOpenSignInModal={setOpenSignInModal} />
        {openSignInModal && (
          <SignInModal setOpenSignInModal={setOpenSignInModal} />
        )}
        {/* first container */}
        <div className="h-[90%] flex flex-col justify-center items-center">
          {/* second container */}
          <div className="w-[100%] h-[96%] flex flex-col justify-center items-center">
            {/* input box */}
            <div className="flex flex-col items-center w-full h-[25%]">
              <div className="flex flex-col rounded-lg bg-white shadow-xl p-2 border mt-2 min-h-[25%] w-[420px]">
                <input
                  className="bg-transparent w-full outline-none p-2 text-gray-700 placeholder-gray-500 border-b"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                />
                <textarea
                  className="bg-transparent w-full outline-none resize-none h-auto p-2 text-gray-700 placeholder-gray-500 mt-2"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <GrFormAdd
                  className="self-center text-gray-500 hover:text-blue-500 transition-colors duration-200 h-8 w-8 cursor-pointer mt-2"
                  title="Add note"
                  onClick={handleAddTodo} // Call handleAddTodo when clicked
                />
              </div>
            </div>

            {/* task card container */}
            <div className="w-[95%] h-[70%] flex justify-center items-center">
              {/* incomplete task */}
              <TodoTask values={todos} />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
