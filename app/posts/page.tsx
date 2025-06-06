"use client";
import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { type PaginatePosts, type PaginatePost } from "@/textile";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Posts",
};

const Loading = () => <div>Loading ...</div>;

export default function Posts() {
  const [pages, setPages] = useState<PaginatePosts | null>(null);
  const [idx, setIdx] = useState(0);
  const page: PaginatePost | null = pages ? pages[idx] : null;
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/posts")
        .then((res) => res.json())
        .then(setPages);
    }
  }, []);
  const pages_length = pages?.length ?? 0;
  return (
    <div>
      <h3>Posts</h3>
      {page ? (
        page.map((p) => (
          <PostCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            date={p.date}
            description={p.description}
          />
        ))
      ) : (
        <Loading />
      )}
      <div className="old-new">
        {idx < pages_length - 1 ? (
          <button onClick={() => setIdx(idx + 1)}>Older Posts</button>
        ) : (
          <p>No older posts</p>
        )}
        {idx > 0 ? (
          <button onClick={() => setIdx(idx - 1)}>Newer Posts</button>
        ) : (
          <p>No newer posts</p>
        )}
      </div>
    </div>
  );
}
