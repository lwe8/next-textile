import type { Page } from "@/textile";
import type { FC } from "react";

const notfound = "<h1>Post not found.!!</h1>";
const PageLayout: FC<Partial<Page>> = ({ parsedData }) => {
	const html = { __html: parsedData?.body ?? notfound };
	return <div className="page" dangerouslySetInnerHTML={html} />;
};

export default PageLayout;
