import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import ProtectedRoute from "./utils/ProtectedRoute";
import {FaGithub} from "react-icons/fa"

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Project Repo Button */}
        <a
          href="https://github.com/rakeshdeka/todo-app" // Replace with your actual repo URL
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 flex items-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-full shadow-lg transition duration-150 ease-in-out"
        >
          <FaGithub className="text-xl mr-2" />
          <span>View Repo</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
