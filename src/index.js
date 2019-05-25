import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { bindActionCreators } from "redux";
import store from "./store";
import { updateCurrent } from "./reducers/todo";

// const state = {
//   todos: [
//     { id: 1, name: "Render static UI", isComplete: true },
//     { id: 2, name: "Create initial state", isComplete: true },
//     { id: 3, name: "Render based on state UI", isComplete: false }
//   ]
// };

// const todoChangeHandler = val => store.dispatch(updateCurrent(val));

const actions = bindActionCreators(
  {
    updateCurrent
  },
  store.dispatch
);
const render = () => {
  const state = store.getState();

  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={actions.updateCurrent}
    />,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);

serviceWorker.unregister();
