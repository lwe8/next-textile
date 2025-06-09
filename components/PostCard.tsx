import type { Post } from "@/textile";
import Link from "next/link";
import type { FC } from "react";

interface PostCardProps {
  slug: Post["slug"];
  title?: Post["parsedData"]["title"];
  date?: Post["parsedData"]["date"];
  description?: Post["parsedData"]["description"];
  coverImg?: Post["parsedData"]["coverImg"];
}

const PostCard: FC<PostCardProps> = ({
  slug,
  title,
  date,
  description,
  coverImg,
}) => {
  const _title = title ?? "";
  const _date = date ?? "";
  const des = description ?? "";
  const img = coverImg ?? "";
  return (
    <div className="blog-card">
      <section>
        <h3>{_title}</h3>
        <img src={img} alt={_title} />
        <p className="date">{_date}</p>
        <p>{des}</p>
        <Link href={`/posts/${slug}`} className="post-link">
          Read More
        </Link>
      </section>
    </div>
  );
};

export default PostCard;
