import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"/assets/desktop-banner/124177.webp",
			"/assets/desktop-banner/139649.webp",
			"/assets/desktop-banner/184992.webp",
			"/assets/desktop-banner/201747.webp",
			"/assets/desktop-banner/355983.webp",
			"/assets/desktop-banner/650142.webp",
			"/assets/desktop-banner/949156.webp",
			"/assets/desktop-banner/977111.webp",
		], // 桌面横幅图片
		mobile: [
			"/assets/mobile-banner/153160.webp",
			"/assets/mobile-banner/471992.webp",
			"/assets/mobile-banner/525406.webp",
			"/assets/mobile-banner/687678.webp",
		], // 移动横幅图片
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
