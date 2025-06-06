import fs from "node:fs/promises";
import path from "node:path";

export async function readContent(folderPath: string) {
	const _folderPath = path.resolve(process.cwd(), folderPath);
	const files = await fs.readdir(_folderPath, { withFileTypes: true });
	const dataArray = await Promise.all(
		files.map(async (file) => {
			const _slug = file.name.split(".")[0];
			const filePath = path.join(_folderPath, file.name);
			const [str, stat] = await Promise.all([
				fs.readFile(filePath, "utf8"),
				fs.stat(filePath),
			]);
			return {
				slug: _slug,
				birthtimeMs: stat.birthtimeMs,
				createAt: stat.ctime,
				lastUpdate: stat.mtime,
				content: str,
			};
		}),
	);
	return dataArray;
}
const homeFile = path.resolve(process.cwd(), "contents/index.textile");
const homeText = await fs.readFile(homeFile, "utf8");
const homeStat = await fs.stat(homeFile);
export const homeData = {
	slug: "home",
	birthtimeMs: homeStat.birthtimeMs,
	createAt: homeStat.ctime,
	lastUpdate: homeStat.mtime,
	content: homeText,
};
