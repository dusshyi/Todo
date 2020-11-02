import React from "react";
import { connect } from "react-redux";
import { todoListFilters, toggleTodo } from "../redux/actions";

const getTodoList = (todos, filter) => {
  switch (filter) {
    case todoListFilters.SHOW_ALL:
      return todos;
    case todoListFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case todoListFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    default:
      throw new Error("unknown filter" + filter);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getTodoList(state.todos, state.todoListFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => toggleTodo(todo.id)}
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
