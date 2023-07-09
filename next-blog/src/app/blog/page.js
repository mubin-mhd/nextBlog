import React from "react";
import axios from "axios";
import CardBlog from "../components/CardBlog";

export default async function Page() {
  const res = await fetch("https://gorest.co.in/public/v2/posts");

  const data = await res.json();

  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Blog List
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <CardBlog item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
