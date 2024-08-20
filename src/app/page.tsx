"use client";

import { useSession } from "next-auth/react";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="bg-white px-8 py-6 flex justify-center items-center">
      {session ? (
        <Link href="/createTodo">TODOを作成する</Link>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4">こちらからログインしてください</p>
          <Link
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-300 hover:text-gray-700"
            href="/login"
          >
            ログイン
          </Link>
        </div>
      )}
    </div>
  );
}
