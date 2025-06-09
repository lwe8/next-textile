import type { Post } from "@/textile";
import type { FC } from "react";
import { notFound } from "next/navigation";
interface PostsProps {
  prev: Post["prev"];
  next: Post["next"];
  body?: Post["parsedData"]["body"];
  title?: Post["parsedData"]["title"];
  date?: Post["parsedData"]["date"];
}

// const notfound = "<h1>Post not found.!!</h1>";
const PostLayout: FC<PostsProps> = ({ prev, next, body, title, date }) => {
  const html = { __html: body ?? notFound() };
  const _title = title ?? "";
  const _date = date ?? "";
  return (
    <section>
      <div className="post-head">
        <h1>{_title}</h1>
        <p>{_date}</p>
      </div>
      <div className="post" dangerouslySetInnerHTML={html} />
      <div className="pagination">
        {prev.bool ? (
          <a href={prev.slug}>Previous Post : {prev.title}</a>
        ) : (
          <p>{prev.title}</p>
        )}
        {next.bool ? (
          <a href={next.slug}>Next Post : {next.title}</a>
        ) : (
          <p>{next.title}</p>
        )}
      </div>
    </section>
  );
};

export default PostLayout;
