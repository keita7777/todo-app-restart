"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <button onClick={() => signIn("github", { callbackUrl: "/todos" })}>
          githubサインイン
        </button>
        <button onClick={() => signIn("google", { callbackUrl: "/todos" })}>
          googleサインイン
        </button>
      </div>
    </div>
  );
};

export default page;
