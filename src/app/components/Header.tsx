import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 py-2">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">TODO APP</h1>
        <div className="flex justify-between items-center gap-3">
          <nav className="flex gap-3 text-white">
            <Link
              className="p-2 rounded-2xl transition-all duration-100 ease-linear hover:bg-white hover:text-blue-500"
              href="/"
            >
              ホーム
            </Link>
            <Link
              className="p-2 rounded-2xl transition-all duration-100 ease-linear hover:bg-white hover:text-blue-500"
              href="/"
            >
              新規作成
            </Link>
            <Link
              className="p-2 rounded-2xl transition-all duration-100 ease-linear hover:bg-white hover:text-blue-500"
              href="/"
            >
              ログアウト
            </Link>
          </nav>
          <Image
            src="/profile_icon_default.png"
            alt=""
            width={60}
            height={60}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
