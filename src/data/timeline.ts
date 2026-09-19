/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "开始搭建个人博客",
		date: "2026.09",
		category: "milestone",
		subtitle: "我的小天地",
		description: "在这里记录成长、分享想法。这是一条占位示例，替换成你自己的经历吧。",
		tags: ["博客", "开始"],
		icon: "material-symbols:rocket-launch-rounded",
		featured: true,
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
