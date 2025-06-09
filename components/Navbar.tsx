import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <h2>Next Textile</h2>
      <nav>
        <div>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/posts" className="nav-link">
            Posts
          </Link>
        </div>
        <button type="button" className="theme-btn" data-theme-toggle></button>
      </nav>
    </header>
  );
}
