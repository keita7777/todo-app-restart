"use client";

import { Todo } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getStatusStyle } from "../lib/getStatusStyle";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodoListState, todoListState } from "../atoms/todoListAtom";

async function fetchAllTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo`, {
    cache: "no-store",
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`サーバーエラー一覧: ${res.status} ${res.statusText}`);
  }

  try {
    const data = await res.json();
    return data.todos;
  } catch (error) {
    console.error("JSONのパースに失敗しました:", error);
  }
}

const TodoList = () => {
  const setTodoListState = useSetRecoilState(todoListState);
  const sortedTodoList = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    const getTodoListData = async () => {
      const todos = await fetchAllTodos();
      //読み込み時は降順にリストを並べる
      const descTodos = todos.sort(
        (a: Todo, b: Todo) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setTodoListState(descTodos);
    };

    getTodoListData();
  }, []);

  return (
    <ul className="pb-2">
      {sortedTodoList.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex flex-col bg-white p-4 mb-4 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-100"
        >
          <Link href={`/todos/${todo.id}`} className="flex flex-col">
            <div className="flex pb-2 border-b-2">
              <span
                className={`p-1 rounded-md ${getStatusStyle(todo.statusId)}`}
              >
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
