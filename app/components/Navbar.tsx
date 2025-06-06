import Link from "next/link";
import { ThemeSwitch } from "./Theme";
export default function Navbar() {
  return (
    <nav>
      <h2>Next Textile</h2>
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/posts" className="nav-link">
        Posts
      </Link>
      <ThemeSwitch attribute="data-theme" classname="theme-btn" />
    </nav>
  );
}
