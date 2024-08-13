import React from "react";

const TodoList = () => {
  return (
    <ul className="pb-2">
      <li className="flex flex-col bg-white pt-5 pb-2 px-4 mb-4">
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-2">
            <select className="border p-2 rounded-md">
              <option value="notstarted">未着手</option>
              <option value="progress">進行中</option>
              <option value="done">完了</option>
            </select>
            <p>テキストテキストテキストテキストテキスト</p>
          </div>

          <div className="flex justify-start items-center gap-2">
            <button className="bg-green-600 text-slate-50 p-2">編集</button>
            <button className="bg-red-600 text-slate-50 p-2">削除</button>
          </div>
        </div>
        <small className="text-end pt-2">最終更新日時：2024/12/12 12:12</small>
      </li>
      <li className="flex flex-col bg-white pt-5 pb-2 px-4 mb-4">
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-2">
            <select className="border p-2 rounded-md">
              <option value="notstarted">未着手</option>
              <option value="progress">進行中</option>
              <option value="done">完了</option>
            </select>
            <p>テキストテキストテキストテキストテキスト</p>
          </div>

          <div className="flex justify-start items-center gap-2">
            <button className="bg-green-600 text-slate-50 p-2">編集</button>
            <button className="bg-red-600 text-slate-50 p-2">削除</button>
          </div>
        </div>
        <small className="text-end pt-2">最終更新日時：2024/12/12 12:12</small>
      </li>
      <li className="flex flex-col bg-white pt-5 pb-2 px-4 mb-4">
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-2">
            <select className="border p-2 rounded-md">
              <option value="notstarted">未着手</option>
              <option value="progress">進行中</option>
              <option value="done">完了</option>
            </select>
            <p>テキストテキストテキストテキストテキスト</p>
          </div>

          <div className="flex justify-start items-center gap-2">
            <button className="bg-green-600 text-slate-50 p-2">編集</button>
            <button className="bg-red-600 text-slate-50 p-2">削除</button>
          </div>
        </div>
        <small className="text-end pt-2">最終更新日時：2024/12/12 12:12</small>
      </li>
    </ul>
  );
};

export default TodoList;
