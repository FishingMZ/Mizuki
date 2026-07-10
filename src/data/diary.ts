// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"The falling speed of cherry blossoms is five centimeters per second!",
		date: "2025-01-15T10:30:00Z",
		images: ["/images/diary/sakura.jpg", "/images/diary/1.webp"],
	},
	{
		id: 2,
		content:
			"这是第一篇日记。3月4号开学，但主包至今仍未完成我的作业。天气还可以。yinghao1今天早上10点多前来拜访我，和他打了一会mc随机生存，2点送别并归还了我的笔记本。试图在笔记本上安装Archlinux/Debian结果失败。因好友开学而无人陪玩感到悲伤寂寥。晚上剃度准备开学。",
		date: "2026-03-02T22:50:00Z",
	},
 	{
		id: 3,
		content:
			"今天研究了一下旧聊这个软件，这软件逆天地支持到安卓2.3以上，所以我现在计划买一台红米1/1s，用来陪我度过我九下的这三个月。目前在闲鱼看到的都是30块钱左右。开学后我的所有设备都会受到管控，购入一台地下设备是很必要的，至少可以与外界保持通讯。这台设备上面我要求就不高了，旧聊和b站肯定是必装的，b站我可以用哔哩终端，只可惜终端停更了。下次见可能要么是电脑上要么是新的红米1上了。早上起来还得补会作业。再会。",
		date: "2026-03-04T02:30:00Z",
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
