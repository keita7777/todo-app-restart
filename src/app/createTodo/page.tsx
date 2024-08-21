"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { getStatusName } from "../lib/getStatusName";
import { useRecoilState } from "recoil";
import { loadingState } from "../atoms/loadingAtom";
import LoadingSpinner from "../components/LoadingSpinner";
// import { getStatusName } from "../utils/getStatusName";

const postBlog = async (
  title: string | undefined,
  content: string | undefined,
  statusId: string | undefined,
  statusName: string | undefined,
  userId: string | undefined | null
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo`, {
    method: "POST",
    body: JSON.stringify({ title, content, statusId, statusName, userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(`Status: ${res.status}`);
  // console.log(`Response Text: ${await res.text()}`);

  if (!res.ok) {
    throw new Error("サーバーエラー");
  }

  return res.json();
};

const Page = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    await postBlog(
      titleRef.current?.value,
      contentRef.current?.value,
      statusRef.current?.value,
      getStatusName(statusRef.current?.value),
      user?.id
    );

    router.push("/todos");
    router.refresh();
    setIsLoading(false);
  };

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-4 py-12 my-10 flex flex-col gap-2 shadow-lg"
    >
      <div className="flex">
        <select ref={statusRef} className="border p-2 mr-2 rounded-md">
          <option value="notstarted" label="未着手">
            未着手
          </option>
          <option value="progress" label="進行中">
            進行中
          </option>
          <option value="done" label="完了">
            完了
          </option>
        </select>
        <input
          ref={titleRef}
          type="text"
          className="flex-1 border p-2 outline-none"
        />
      </div>

      <textarea ref={contentRef} className="border p-2 outline-none" />
      <button className="bg-blue-500 text-slate-50 p-2 hover:bg-blue-300 hover:text-gray-900 transition-all duration-100">
        追加
      </button>
    </form>
  );
};

export default Page;
