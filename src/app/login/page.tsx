"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <button onClick={() => signIn("github", { callbackUrl: "/todos" })}>
          サインイン
        </button>
      </div>
    </div>
  );
};

export default page;
