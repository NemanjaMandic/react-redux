import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App({ todos, currentTodo, changeCurrent }) {
  return (
    <div className="App">
      <div className="todo-app">
        <TodoForm currentTodo={currentTodo} changeCurrent={changeCurrent} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
