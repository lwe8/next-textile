import { homeData, readContent } from "./files";
import matter, { type MatterResult } from "./matter";
import textile from "./textile-parser";
interface PostsData extends MatterResult {
  title: string;
  date: string;
  description: string;
}
interface PagesData extends MatterResult {
  title: string;
}

export type Post = {
  slug: string;
  birthtimeMs: number;
  createAt: Date;
  lastUpdate: Date;
  parsedData: PostsData;
};
export type Posts = Post[];
export type Page = {
  slug: string;
  birthtimeMs: number;
  createAt: Date;
  lastUpdate: Date;
  parsedData: PagesData;
};
export type Pages = Page[];
function parsePosts(text: string) {
  let dataObj = matter(text) as PostsData;
  dataObj.body = textile.parse(dataObj.body).html;
  dataObj.date = new Date(dataObj.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  });
  return dataObj;
}
function parsePages(text: string) {
  let dataObj = matter(text) as PagesData;
  dataObj.body = textile.parse(dataObj.body).html;
  return dataObj;
}

export const homedata = {
  slug: homeData.slug,
  birthtimeMs: homeData.birthtimeMs,
  createAt: homeData.createAt,
  lastUpdate: homeData.lastUpdate,
  parsedData: parsePages(homeData.content),
};

const posts_data = await readContent("contents/posts");
posts_data.sort((a, b) => b.birthtimeMs - a.birthtimeMs);
export const postsdata: Posts = posts_data.map((post) => {
  return {
    slug: post.slug,
    birthtimeMs: post.birthtimeMs,
    createAt: post.createAt,
    lastUpdate: post.lastUpdate,
    parsedData: parsePosts(post.content),
  };
});

const pages_data = await readContent("contents/pages");
export const pagesdata = pages_data.map((page) => {
  return {
    slug: page.slug,
    birthtimeMs: page.birthtimeMs,
    createAt: page.createAt,
    lastUpdate: page.lastUpdate,
    parsedData: parsePages(page.content),
  };
});
