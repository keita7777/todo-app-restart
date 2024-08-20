"use client";

import { signOut } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="bg-white px-8 py-10 flex justify-center items-center">
      <button
        className="bg-gray-700 text-white p-3 rounded-md hover:bg-gray-600"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        ログアウト
      </button>
    </div>
  );
};

export default page;
