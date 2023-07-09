import React from "react";
import Link from "next/link";

export default function CardBlog({ item }) {
  const { id, user_id, title, body } = item;
  return (
    <article className="max-w-xs">
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
        {body.substring(0, 80)}...
      </p>
      <Link
        href={`blog/${id}`}
        className="inline-flex items-center font-medium underline underline-offset-4  text-gray-500 hover:no-underline"
      >
        Detail
      </Link>
    </article>
  );
}
