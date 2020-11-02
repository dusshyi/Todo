import React from "react";
import FilterLink from "./FilterLink";
import { todoListFilters } from "../redux/actions";

const Filters = () => {
  return (
    <div>
      <span>Show:</span>
      <FilterLink filter={todoListFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={todoListFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={todoListFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default Filters;
