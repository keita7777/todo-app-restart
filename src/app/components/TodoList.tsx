"use client";

import { Todo } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoListSelector } from "../recoil/todoListState";

const TodoList = () => {
  const todosLoadable = useRecoilValueLoadable(todoListSelector);

  if (todosLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (todosLoadable.state === "hasError") {
    return <div>Error: {todosLoadable.contents.message}</div>;
  }

  const todos = todosLoadable.contents;

  return (
    <ul className="pb-2">
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex flex-col bg-white p-4 mb-4 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-100"
        >
          <Link href={`/todos/${todo.id}`} className="flex flex-col">
            <div className="flex pb-2 border-b-2">
              <span className="p-1 bg-blue-100 rounded-md">
                {todo.statusName}
              </span>
              <p className="p-1 ml-3">{todo.title}</p>
            </div>
            <p className="pt-2">{todo.content}</p>
            <small className="text-end pt-2">
              最終更新日時：
              {String(new Date(todo.createdAt).toLocaleString())}
            </small>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
