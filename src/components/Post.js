import React from "react";

export const Post = ({ post }) => (
  <article className="shadow p-2 bg-blue-100">
    <h2 className="text-2xl font-semibold mb-3 f-up">
      {post.title.substring(0, 50)}
    </h2>
    <p>{post.body.substring(0, 190)}...</p>
  </article>
);
