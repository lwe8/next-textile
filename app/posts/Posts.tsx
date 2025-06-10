"use client";
import BlankDiv from "@/components/BlankDiv";
import Loading from "@/components/Loading";
import PostCard from "@/components/PostCard";
import type { PaginatePosts } from "@/textile";
import { useEffect, useState } from "react";
import PagePagination from "@/components/PagePaginate";

export default function AllPosts() {
  const [pages, setPages] = useState<PaginatePosts | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/posts/allposts")
        .then((res) => res.json())
        .then((data) => {
          setPages(data);
        });
    }
  }, []);

  const page = pages?.[idx] ?? null;
  const totalPage = pages?.length ?? 0;

  return (
    <div>
      <h3 style={{ marginBottom: "25px", textAlign: "center" }}>Posts</h3>
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
        <PagePagination fn={setIdx} index={idx} pages={totalPage} />
      ) : (
        <BlankDiv />
      )}
    </div>
  );
}
