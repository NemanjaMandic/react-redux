import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../reducers/todo";

const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete ? "checked" : ""} />
    {name}
  </li>
);
class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos } = this.props;

    console.log(this.props);
    return (
      <div className="todo-list">
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gimmeTodos: todos => dispatch(fetchTodos(todos))
  };
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
