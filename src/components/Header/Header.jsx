import React from "react";
import { LuListTodo } from "react-icons/lu";

export const Header = ({ setOpenSignInModal }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-2xl font-bold tracking-wide text-center">
          TODO <span className="text-yellow-300">APP</span>
        </p>
      </div>
    </header>
  );
};
