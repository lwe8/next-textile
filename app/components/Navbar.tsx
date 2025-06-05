import { headers } from "next/headers";
import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <nav>
        <li>
          <Link href={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href={"/posts"} className="nav-link">
            Posts
          </Link>
        </li>
      </nav>
    </header>
  );
}
