import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col bg-white pt-5 pb-2 px-4 my-4 shadow-lg">
        <div className="flex items-center border-b-2 pb-2">
          <span className="p-1 bg-blue-100 rounded-md">着手中</span>
          <p className="ml-3">タイトル</p>
        </div>
        <p className="mt-2">テキストテキストテキストテキスト</p>
        <small className="text-end pt-2">最終更新日時：2024/12/12</small>
        <div className="flex justify-center items-center gap-2">
          <Link
            href={`/todos/1/edit`}
            className="bg-green-600 text-slate-50 p-2 hover:bg-green-300 hover:text-gray-900 transition-all duration-100"
          >
            編集
          </Link>
          <Link
            href={`/todos/1/edit`}
            className="bg-red-600 text-slate-50 p-2 hover:bg-red-300 hover:text-gray-900 transition-all duration-100"
          >
            削除
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
