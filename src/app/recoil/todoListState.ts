import { Todo } from "@prisma/client";
import { atom, selector } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const todoSortState = atom({
  key: "todoSortState",
  default: "", // 初期値はフィルタなし
});

export const todoFilterState = atom({
  key: "todoFilterState",
  default: "", // 初期値はフィルタなし
});

export const todoListSelector = selector({
  key: "todoListSelector",
  get: async ({ get }) => {
    const sort = get(todoSortState);
    const filter = get(todoFilterState);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo`, {
      cache: "no-store",
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`サーバーエラー一覧: ${res.status} ${res.statusText}`);
    }

    try {
      const data = await res.json();
      let todos = data.todos;

      // フィルタリング処理
      if (sort === "") {
        if (filter === "notstarted") {
          todos = todos.filter((todo: Todo) => todo.statusId === "notstarted");
        } else if (filter === "progress") {
          todos = todos.filter((todo: Todo) => todo.statusId === "progress");
        } else if (filter === "done") {
          todos = todos.filter((todo: Todo) => todo.statusId === "done");
        } else {
          todos = todos;
        }
      } else if (sort === "date_asc") {
        if (filter === "notstarted") {
          todos = todos.filter((todo: Todo) => todo.statusId === "notstarted");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        } else if (filter === "progress") {
          todos = todos.filter((todo: Todo) => todo.statusId === "progress");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        } else if (filter === "done") {
          todos = todos.filter((todo: Todo) => todo.statusId === "done");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        } else {
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }
      } else if (sort === "date_desc") {
        if (filter === "notstarted") {
          todos = todos.filter((todo: Todo) => todo.statusId === "notstarted");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else if (filter === "progress") {
          todos = todos.filter((todo: Todo) => todo.statusId === "progress");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else if (filter === "done") {
          todos = todos.filter((todo: Todo) => todo.statusId === "done");
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else {
          todos = todos.sort(
            (a: Todo, b: Todo) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
      }
      return todos;
    } catch (error) {
      console.error("JSONのパースに失敗しました:", error);
      return [];
    }
  },
});
