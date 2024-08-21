"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterSelectState } from "../atoms/todoListAtom";

const FilterTodo = () => {
  const [selectValue, setSelectValue] = useState("");
  const setFilterSelectState = useSetRecoilState(filterSelectState);

  useEffect(() => {
    setFilterSelectState(selectValue);
  }, [selectValue]);

  return (
    <div className="grid py-10 grid-cols-3 gap-2">
      {/* <select className="border p-2 rounded-md">
        <option value="">並び替える</option>
        <option value="date_asc">更新日時（昇順）</option>
        <option value="date_desc">更新日時（降順）</option>
      </select> */}
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">絞り込む</option>
        <option value="all">すべて</option>
        <option value="notstarted">未着手</option>
        <option value="progress">進行中</option>
        <option value="done">完了</option>
      </select>
    </div>
  );
};

export default FilterTodo;
