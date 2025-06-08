import Link from "next/link";
import ThemeIcons from "./icons/ThemeIcons";
export default function Nav() {
  return (
    <nav className="mb-18 pb-7 border-b-3 border-b-[#d1d1d1] dark:border-b-[#566] mt-10">
      <h2 className="text-center text-3xl text-[#666] dark:text-[#ccc]">
        Next Textile
      </h2>
      <Link
        href="/"
        className="mr-15 no-underline text-[#444] dark:text-[#ddd] hover:text-[#070] dark:hover:text-[#088]"
      >
        Home
      </Link>
      <Link
        href="/posts"
        className="mr-15 no-underline text-[#444] dark:text-[#ddd] hover:text-[#070] dark:hover:text-[#088]"
      >
        Posts
      </Link>
      <ThemeIcons />
    </nav>
  );
}