"use client";
import BlankDiv from "@/components/BlankDiv";
import Loading from "@/components/Loading";
import PostCard from "@/components/PostCard";
import type { PaginatePost, PaginatePosts } from "@/textile";
import { useEffect, useState } from "react";

export default function AllPosts() {
  const [pages, setPages] = useState<PaginatePosts | null>(null);
  const [idx, setIdx] = useState(0);
  const page: PaginatePost | null = pages ? pages[idx] : null;
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/posts/allposts")
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
            coverImg={p.coverImg}
          />
        ))
      ) : (
        <Loading />
      )}
      {page ? (
        <div className="pagination">
          {idx < pages_length - 1 ? (
            <button type="button" onClick={() => setIdx(idx + 1)}>
              Older Posts
            </button>
          ) : (
            <p>No older posts</p>
          )}
          {idx > 0 ? (
            <button type="button" onClick={() => setIdx(idx - 1)}>
              Newer Posts
            </button>
          ) : (
            <p>No newer posts</p>
          )}
        </div>
      ) : (
        <BlankDiv />
      )}
    </div>
  );
}
