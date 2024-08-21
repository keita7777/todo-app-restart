import { Todo } from "@prisma/client";
import { atom, selector } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const filterSelectState = atom<string>({
  key: "filterSelectState",
  default: "",
});

export const filteredTodoListState = selector<Todo[]>({
  key: "filteredTodoList",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(filterSelectState);

    switch (filter) {
      case "notstarted":
        return todoList.filter((todo) => todo.statusId === "notstarted");
      case "progress":
        return todoList.filter((todo) => todo.statusId === "progress");
      case "done":
        return todoList.filter((todo) => todo.statusId === "done");
      default:
        return todoList;
    }
  },

  set: ({ set }, newValue) => {
    set(todoListState, newValue as Todo[]);
  },
});
