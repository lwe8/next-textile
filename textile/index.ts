import { homeData, readContent } from "./files";
import matter, { type MatterResult } from "./matter";
import textile from "./textile-parser";
interface PostsData extends MatterResult {
  title: string;
  date: string;
  description: string;
  coverImg: string;
}
interface PagesData extends MatterResult {
  title: string;
}

interface _Post {
  slug: string;
  birthtimeMs: number;
  createAt: Date;
  lastUpdate: Date;
  parsedData: PostsData;
}
export interface Post extends _Post {
  prev: {
    bool: boolean;
    title: string;
    slug: string;
  };
  next: {
    bool: boolean;
    title: string;
    slug: string;
  };
}
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
  const dataObj = matter(text) as PostsData;
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
  const dataObj = matter(text) as PagesData;
  dataObj.body = textile.parse(dataObj.body).html;
  return dataObj;
}
// data for home page from index.textile
export const homedata = {
  slug: homeData.slug,
  birthtimeMs: homeData.birthtimeMs,
  createAt: homeData.createAt,
  lastUpdate: homeData.lastUpdate,
  parsedData: parsePages(homeData.content),
};
// posts data
const posts_data = await readContent("contents/posts");
posts_data.sort((a, b) => b.birthtimeMs - a.birthtimeMs);
const _postsdata: _Post[] = posts_data.map((post) => {
  return {
    slug: post.slug,
    birthtimeMs: post.birthtimeMs,
    createAt: post.createAt,
    lastUpdate: post.lastUpdate,
    parsedData: parsePosts(post.content),
  };
});
export const postsdata: Posts = _postsdata.map((post) => {
  const length = _postsdata.length;
  const idx = _postsdata.indexOf(post);
  const _prev =
    idx <= 0
      ? { bool: false, title: "No Post Found", slug: "" }
      : {
          bool: true,
          title: _postsdata[idx - 1].parsedData.title,
          slug: _postsdata[idx - 1].slug,
        };
  const _next =
    idx >= length - 1
      ? { bool: false, title: "No Post Found", slug: "" }
      : {
          bool: true,
          title: _postsdata[idx + 1]?.parsedData.title,
          slug: _postsdata[idx + 1]?.slug,
        };
  return {
    slug: post.slug,
    birthtimeMs: post.birthtimeMs,
    createAt: post.createAt,
    lastUpdate: post.lastUpdate,
    parsedData: post.parsedData,
    prev: { ..._prev },
    next: { ..._next },
  };
});
//
export type PaginatePost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImg: string;
}[];
export type PaginatePosts = PaginatePost[];
const size = 5;
const page_count = Math.ceil(postsdata.length / size);
export function paginatePosts(): PaginatePosts {
  const postPages = Array.from({ length: page_count }, (_, i) => {
    const _index = i * size;
    const _posts = postsdata.slice(_index, _index + size);
    const _page = _posts.map((post) => {
      return {
        slug: post.slug,
        title: post.parsedData.title,
        date: post.parsedData.date,
        description: post.parsedData.description,
        coverImg: post.parsedData.coverImg,
      };
    });
    return _page;
  });
  return postPages;
}

//
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
