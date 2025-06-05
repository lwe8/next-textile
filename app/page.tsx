import { homedata } from "@/textile";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: homedata.slug.toUpperCase(),
};
export default function Home() {
  const html = { __html: homedata.parsedData.body };
  return <div className="home" dangerouslySetInnerHTML={html} />;
}
