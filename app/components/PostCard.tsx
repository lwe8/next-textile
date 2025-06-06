import type { Post } from "@/textile";
import Link from "next/link";
import type { FC } from "react";

interface PostCardProps {
	slug: Post["slug"];
	title?: Post["parsedData"]["title"];
	date?: Post["parsedData"]["date"];
	description?: Post["parsedData"]["description"];
}

const PostCard: FC<PostCardProps> = ({ slug, title, date, description }) => {
	const _title = title ?? "";
	const _date = date ?? "";
	const des = description ?? "";
	return (
		<div className="post-card">
			<Link href={`/posts/${slug}`} className="post-link">
				{_title}
			</Link>
			<p>{_date}</p>
			<p>{des}</p>
		</div>
	);
};

export default PostCard;
