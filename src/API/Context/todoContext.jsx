import React, { createContext, useState, useEffect, useContext } from "react";
import API from "../config"; // Assuming API is an Axios instance configured with the base URL

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const response = await API.get("/todos");
      setTodos(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch todos");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  // Get a todo by ID
  const getTodoById = async (todoId) => {
    try {
      const response = await API.get(`/todos/${todoId}`);
      return response.data.data;
    } catch (error) {
      setError("Failed to fetch the todo");
      throw error;
    }
  };

  // Create a new todo
  const createTodo = async (title, description) => {
    try {
      const response = await API.post("/todos", { title, description });
      setTodos([...todos, response.data.data]);
      return response.data.data;
    } catch (error) {
      setError("Failed to create todo");
      throw error;
    }
  };

  // Update a todo
  const updateTodo = async (todoId, updatedData) => {
    console.log("todoId, updatedData", todoId, updatedData);

    try {
      const response = await API.put(`/todos/${todoId}`, updatedData);
      console.log("res", response);
      
      setTodos(
        todos.map((todo) => (todo.id === todoId ? response.data.data : todo))
      );
      return response.data.data;
    } catch (error) {
      setError("Failed to update todo");
      throw error;
    }
  };

  // Delete a todo
  const deleteTodo = async (todoId) => {
    try {
      await API.delete(`/todos/${todoId}`);
      setTodos(todos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      setError("Failed to delete todo");
      throw error;
    }
  };

  // Toggle todo status
  const toggleTodoStatus = async (todoId) => {
    try {
      const response = await API.put(`/todos/toggle/status/${todoId}`);
      setTodos(
        todos.map((todo) => (todo.id === todoId ? response.data.data : todo))
      );
      return response.data.data;
    } catch (error) {
      setError("Failed to toggle todo status");
      throw error;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        getTodoById,
        createTodo,
        updateTodo,
        deleteTodo,
        toggleTodoStatus,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
