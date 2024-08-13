import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div>
      <FilterTodo />
      <TodoList />
    </div>
  );
}
