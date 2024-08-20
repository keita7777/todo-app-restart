"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <>
      {session && (
        <div className="bg-white px-8 py-10 flex gap-10">
          <Image
            src={session.user.image || "profile_icon_default.png"}
            alt={session.user.name!}
            width={50}
            height={50}
          />
          <div>
            <p>名前：{session?.user.name}</p>
            <p>メールアドレス：{session?.user.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
