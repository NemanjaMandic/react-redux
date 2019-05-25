import React from "react";

const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete ? "checked" : ""} />
    {name}
  </li>
);
export default ({ todos }) => (
  <div className="todo-list">
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);
