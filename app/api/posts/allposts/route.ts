import { type PaginatePosts, paginatePosts } from "@/textile";
const pages: PaginatePosts = paginatePosts();
export const GET = async (_req: Request) =>
	new Response(JSON.stringify(pages), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
