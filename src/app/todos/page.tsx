import React from "react";
import FilterTodo from "../components/FilterTodo";
import TodoList from "../components/TodoList";

const page = () => {
  return (
    <div>
      <FilterTodo />
      <TodoList />
    </div>
  );
};

export default page;
