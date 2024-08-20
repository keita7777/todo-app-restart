"use client";

import { getStatusName } from "@/app/lib/getStatusName";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const getBlogById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("サーバーエラー");
  }

  try {
    const data = await res.json();
    return data.todo;
  } catch (error) {
    console.error("JSONのパースに失敗しました:", error);
  }
};

const editBlog = async (
  title: string | undefined,
  content: string | undefined,
  statusId: string | undefined,
  statusName: string | undefined,
  id: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ title, content, statusId, statusName, id }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data;
};

const EditPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const statusRef = useRef<HTMLSelectElement | null>(null);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    await editBlog(
      titleRef.current?.value,
      contentRef.current?.value,
      statusRef.current?.value,
      getStatusName(statusRef.current?.value),
      params.id
    );

    router.push("/todos");
    router.refresh();
  };

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        if (titleRef.current && contentRef.current && statusRef.current) {
          titleRef.current.value = data.title;
          contentRef.current.value = data.content;
          statusRef.current.value = data.statusId;
        }
      })
      .catch((err) => {});
  }, [params.id]);

  return (
    <form
      onSubmit={handleUpdate}
      className="bg-white px-4 py-12 my-10 flex flex-col gap-2 shadow-lg"
    >
      <div className="flex">
        <select
          ref={statusRef}
          value={statusRef.current?.value}
          className="border p-2 mr-2 rounded-md"
        >
          <option value="notstarted">未着手</option>
          <option value="progress">進行中</option>
          <option value="done">完了</option>
        </select>
        <input
          ref={titleRef}
          type="text"
          className="flex-1 border p-2 outline-none"
        />
      </div>

      <textarea ref={contentRef} className="border p-2 outline-none" />
      <div className="flex justify-center items-center gap-5">
        <button className="bg-blue-500 text-slate-50 p-2 hover:bg-blue-300 hover:text-gray-900 transition-all duration-100 w-28">
          更新
        </button>
        <Link
          href="/todos"
          className="text-center bg-red-500 text-slate-50 p-2 hover:bg-red-300 hover:text-gray-900 transition-all duration-100 w-28"
        >
          キャンセル
        </Link>
      </div>
    </form>
  );
};

export default EditPage;
