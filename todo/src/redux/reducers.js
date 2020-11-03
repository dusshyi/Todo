import { combineReducers } from "redux";
import { todoListFilters } from "./actions";

const listData = require("../todoList.json");

const todos = (state = listData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

const todoListFilter = (state = todoListFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_TODO_LIST_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  todoListFilter,
});
