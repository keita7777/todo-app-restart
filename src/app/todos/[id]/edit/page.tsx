import React from "react";

const page = () => {
  return (
    <form className="bg-white px-4 py-12 my-10 flex flex-col gap-2 shadow-lg">
      <div className="flex">
        <select className="border p-2 mr-2 rounded-md">
          <option value="notstarted">未着手</option>
          <option value="progress">進行中</option>
          <option value="done">完了</option>
        </select>
        <input type="text" className="flex-1 border p-2 outline-none" />
      </div>

      <textarea className="border p-2 outline-none" />
      <button className="bg-blue-500 text-slate-50 p-2 hover:bg-blue-300 hover:text-gray-900 transition-all duration-100">
        更新
      </button>
    </form>
  );
};

export default page;
