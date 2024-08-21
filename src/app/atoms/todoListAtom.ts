import { Todo } from "@prisma/client";
import { atom, selector } from "recoil";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const sortSelectState = atom<string>({
  key: "sortSelectState",
  default: "",
});

export const filterSelectState = atom<string>({
  key: "filterSelectState",
  default: "",
});

const filterTodoList = (todoList: Todo[], filter: string) => {
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
};

const sortTodoList = (todoList: Todo[], sort: string) => {
  return todoList.sort((a: Todo, b: Todo) => {
    if (sort === "date_asc") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sort === "date_desc") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return 0;
    }
  });
};

export const filteredTodoListState = selector<Todo[]>({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(filterSelectState);
    const sort = get(sortSelectState);

    let filteredTodoList = filterTodoList([...todoList], filter);
    return sort ? sortTodoList(filteredTodoList, sort) : filteredTodoList;

    // const sortedTodoList = [...todoList];

    // switch (sort) {
    //   case "date_asc":
    //     switch (filter) {
    //       case "notstarted":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "notstarted")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(a.createdAt).getTime() -
    //               new Date(b.createdAt).getTime()
    //           );
    //       case "progress":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "progress")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(a.createdAt).getTime() -
    //               new Date(b.createdAt).getTime()
    //           );
    //       case "done":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "done")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(a.createdAt).getTime() -
    //               new Date(b.createdAt).getTime()
    //           );
    //       default:
    //         return sortedTodoList.sort(
    //           (a: Todo, b: Todo) =>
    //             new Date(a.createdAt).getTime() -
    //             new Date(b.createdAt).getTime()
    //         );
    //     }
    //   case "date_desc":
    //     switch (filter) {
    //       case "notstarted":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "notstarted")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(b.createdAt).getTime() -
    //               new Date(a.createdAt).getTime()
    //           );
    //       case "progress":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "progress")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(b.createdAt).getTime() -
    //               new Date(a.createdAt).getTime()
    //           );
    //       case "done":
    //         return sortedTodoList
    //           .filter((todo) => todo.statusId === "done")
    //           .sort(
    //             (a: Todo, b: Todo) =>
    //               new Date(b.createdAt).getTime() -
    //               new Date(a.createdAt).getTime()
    //           );
    //       default:
    //         return sortedTodoList.sort(
    //           (a: Todo, b: Todo) =>
    //             new Date(b.createdAt).getTime() -
    //             new Date(a.createdAt).getTime()
    //         );
    //     }
    //   default:
    //     switch (filter) {
    //       case "notstarted":
    //         return sortedTodoList.filter(
    //           (todo) => todo.statusId === "notstarted"
    //         );
    //       case "progress":
    //         return sortedTodoList.filter(
    //           (todo) => todo.statusId === "progress"
    //         );
    //       case "done":
    //         return sortedTodoList.filter((todo) => todo.statusId === "done");
    //       default:
    //         return sortedTodoList;
    //     }
    // }
  },

  set: ({ set }, newValue) => {
    set(todoListState, newValue as Todo[]);
  },
});
