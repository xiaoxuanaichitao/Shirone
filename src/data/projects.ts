/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "example",
		title: "示例项目",
		summary: "这是一条占位示例，替换成你自己的项目吧。",
		category: "theme",
		phase: "building",
		technologies: ["Astro", "Svelte", "TypeScript"],
		icon: "material-symbols:deployed-code-outline-rounded",
		featured: true,
		repository: "https://github.com/xiaoxuanaichitao/Shirone",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
