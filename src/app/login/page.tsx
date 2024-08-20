"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="bg-white px-8 py-10 flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <button
          className="bg-gray-700 text-white p-3 rounded-md hover:bg-gray-600"
          onClick={() => signIn("github", { callbackUrl: "/todos" })}
        >
          githubサインイン
        </button>
        <button
          className="bg-gray-700 text-white p-3 rounded-md hover:bg-gray-600"
          onClick={() => signIn("google", { callbackUrl: "/todos" })}
        >
          googleサインイン
        </button>
      </div>
    </div>
  );
};

export default page;
