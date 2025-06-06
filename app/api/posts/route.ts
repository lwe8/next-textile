import type { NextApiRequest, NextApiResponse } from "next";
import { paginatePosts, type PaginatePosts } from "@/textile";
const pages: PaginatePosts = paginatePosts();
export const GET = async function (
  _req: Request
) {
  return new Response(JSON.stringify(pages), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
