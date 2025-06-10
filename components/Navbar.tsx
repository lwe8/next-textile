"use client";
import { useState } from "react";
import Link from "next/link";
import MenuBar from "./icons/MenuBar";

type ClassType = "topnav" | "topnav responsive";
const changeClass = (cla: ClassType): ClassType => {
  return cla === "topnav responsive" ? "topnav" : "topnav responsive";
};
export default function Nav() {
  const [navClass, setNavClass] = useState<ClassType>("topnav");

  const toggleNavClass = () => {
    setNavClass((prevClass) => changeClass(prevClass));
  };

  return (
    <div className={navClass} id="navBar">
      <Link href="/" className="logo">
        <span>Next Textile</span>
      </Link>
      <div className="link-group">
        <Link href="posts">Posts</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <button type="button" onClick={toggleNavClass}>
        <MenuBar size={36} />
      </button>
    </div>
  );
}
