import type { FC } from "react";
import type { Post } from "@/textile";
import Link from "next/link";

const PostCard: FC<Partial<Post>> = ({ slug, parsedData }) => {
  const title = parsedData?.title ?? "";
  const date = parsedData?.date ?? "";
  const des = parsedData?.description ?? "";
  const _slug = slug ?? "";
  return (
    <div className="post-card">
      <Link href={`/posts/${_slug}`} className="post-link">
        {title}
      </Link>
      <p>{date}</p>
      <p>{des}</p>
    </div>
  );
};

export default PostCard;
