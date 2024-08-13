import React from "react";

const page = () => {
  return (
    <form className="bg-white px-4 py-12 my-10 flex gap-2 shadow-lg">
      <input type="text" className="flex-1 border p-2 outline-none" />
      <button className="bg-blue-500 text-slate-50 p-2 hover:bg-blue-300 hover:text-gray-900 transition-all duration-100">
        追加
      </button>
    </form>
  );
};

export default page;
