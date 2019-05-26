import React, { Component } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todo-app">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
