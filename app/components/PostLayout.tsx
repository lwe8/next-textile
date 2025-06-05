import type { FC } from "react";
import type { Post } from "@/textile";

const notfound = "<h1>Post not found.!!</h1>";
const PostLayout: FC<Partial<Post>> = ({ parsedData }) => {
  const html = { __html: parsedData?.body ?? notfound };
  const title = parsedData?.title ?? "";
  const date = parsedData?.date ?? "";
  return (
    <section>
      <div className="post-head">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
      <div className="post" dangerouslySetInnerHTML={html} />
    </section>
  );
};

export default PostLayout;
