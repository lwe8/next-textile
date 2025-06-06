import type { FC } from "react";
import type { Post } from "@/textile";

interface PostsProps {
  body?: Post["parsedData"]["body"];
  title?: Post["parsedData"]["title"];
  date?: Post["parsedData"]["date"];
}

const notfound = "<h1>Post not found.!!</h1>";
const PostLayout: FC<PostsProps> = ({ body, title, date }) => {
  const html = { __html: body ?? notfound };
  const _title = title ?? "";
  const _date = date ?? "";
  return (
    <section>
      <div className="post-head">
        <h1>{_title}</h1>
        <p>{_date}</p>
      </div>
      <div className="post" dangerouslySetInnerHTML={html} />
    </section>
  );
};

export default PostLayout;
