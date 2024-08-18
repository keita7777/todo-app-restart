import Link from "next/link";
import React from "react";

const TodoList = () => {
  return (
    <ul className="pb-2">
      <li className="flex flex-col bg-white p-4 mb-4 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-100">
        <Link href="/todos/1" className="flex flex-col">
          <div className="flex pb-2 border-b-2">
            <span className="p-1 bg-blue-100 rounded-md">未着手</span>
            <p className="p-1 ml-3">タイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <p className="pt-2">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Link>
      </li>
      <li className="flex flex-col bg-white p-4 mb-4 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-100">
        <Link href="/todos/1" className="flex flex-col">
          <div className="flex pb-2 border-b-2">
            <span className="p-1 bg-blue-100 rounded-md">未着手</span>
            <p className="p-1 ml-3">タイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <p className="pt-2">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Link>
      </li>
      <li className="flex flex-col bg-white p-4 mb-4 shadow-lg hover:shadow-none hover:translate-y-1 transition-all duration-100">
        <Link href="/todos/1" className="flex flex-col">
          <div className="flex pb-2 border-b-2">
            <span className="p-1 bg-blue-100 rounded-md">未着手</span>
            <p className="p-1 ml-3">タイトルタイトルタイトルタイトルタイトル</p>
          </div>
          <p className="pt-2">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default TodoList;
