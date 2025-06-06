import type { Metadata } from "next";
import AllPosts from "./Posts";
export const metadata: Metadata = {
	title: "Posts",
};

export default function Posts() {
	return <AllPosts />;
}
