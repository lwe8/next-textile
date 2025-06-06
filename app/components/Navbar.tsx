import Link from "next/link";
export default function Navbar() {
	return (
		<nav>
			<h2>Next Textile</h2>
			<a href="/">Home</a>
			<a href="/posts">Posts</a>
			<button type="button" className="theme-btn" data-theme-toggle />
		</nav>
	);
}
