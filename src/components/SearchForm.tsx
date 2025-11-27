"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "16px 0" }}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="レシピ名で検索"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        検索
      </button>
    </form>
  );
}

//検索フォームのコンポーネントを定義してる
