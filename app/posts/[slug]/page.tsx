import PostLayout from "@/components/PostLayout";
import { postsdata } from "@/textile";
/*
 In Next 15, Dynamic APIs have been made asynchronous. 
 - The `params` and `searchParams` props that get provided to posts, layouts, metadata APIs, and route handlers.
 - `cookies()`, `draftMode()`, and `headers()` from `next/headers`
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return postsdata.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const slug = (await params).slug;
  const post = postsdata.find((p) => p.slug === slug);
  if (!post) return;

  return {
    title: post.parsedData.title,
    description: post.parsedData.description,
  };
}
export default async function Post({
  params,
}: {
  // Params must be promise
  params: Promise<{ slug: string }>;
}) {
  // asynchronous access of `params.slug`.
  const slug = (await params).slug;
  const post = postsdata.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return (
    <PostLayout
      prev={post.prev}
      next={post.next}
      body={post.parsedData.body}
      date={post.parsedData.date}
      title={post.parsedData.title}
    />
  );
}
