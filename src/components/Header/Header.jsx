import React from "react";
import { useAuth } from "../../API/Context/AuthContext";

export const Header = ({ setOpenSignInModal }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-2xl font-bold tracking-wide">
          TODO <span className="text-yellow-300">APP</span>
        </p>
        <div className="flex items-center space-x-4">
          <p className="text-lg font-medium">Hello, {user?.name || "User"}</p>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
