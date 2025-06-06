import { homedata } from "@/textile";

export default function Home() {
	const html = { __html: homedata.parsedData.body };
	return <div className="home" dangerouslySetInnerHTML={html} />;
}
