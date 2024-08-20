"use client";

import React from "react";
import { useSetRecoilState } from "recoil";
import { todoFilterState, todoSortState } from "../recoil/todoListState";

const FilterTodo = () => {
  const setSort = useSetRecoilState(todoSortState);
  const setFilter = useSetRecoilState(todoFilterState);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };
  return (
    <div className="grid py-10 grid-cols-3 gap-2">
      <select className="border p-2 rounded-md" onChange={handleSortChange}>
        <option value="">並び替える</option>
        <option value="date_asc">更新日時（昇順）</option>
        <option value="date_desc">更新日時（降順）</option>
      </select>
      <select className="border p-2 rounded-md" onChange={handleFilterChange}>
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
