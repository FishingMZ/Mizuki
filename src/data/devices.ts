// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Xiaomi: [
		{
			name: "Redmi 5 Plus",
			image: "/images/device/redmi5plus.jpg",
			specs: "Rose / 4G + 64GB",
			description:
				"骁龙625一代神u，刷机小王子，摄像较差，刷入alphadroid安卓13退休中。",
			link: "https://www.mi.com/redmi5",
		},
  		{
			name: "Black Shark",
	  		image: "/images/device/blackshark.jpg",
			specs: "Black / 8G + 128GB",
			description:
				"骁龙845，但刷机包极少，不如隔壁的mix2s，摄像一般，刷入lineage安卓15主力中。",
	  		link: "https://www.mi.com/blackshark",
		},
  		{
			name: "Xiaomi Pad 4 Plus",
	  		image: "/images/device/xiaomipad4plus.webp",
			specs: "Black / 4G + 64GB",
			description:
				"骁龙660，刷机包挺多，摄像一般（但是Pad不需要摄像），刷入crdroid安卓13养老中。",
	  	  	link: "https://www.mi.com/mipad4",
		},
  		{
			name: "Xiaomi CC9 Pro",
	  		image: "/images/device/xiaomicc9pro.jpg",
			specs: "Blue / 8G + 256GB",
			description:
				"骁龙730G一代烂u，但是摄像神了，小米首发一亿像素放到今天依旧能打，吃灰中。",
		  	link: "https://www.mi.com/micc9",
		},
  		{
			name: "Xiaomi Smart Band 9 Pro",
	  		image: "/images/device/xiaomismartband9pro.png",
			specs: "Black / 256MB",
			description:
				"续航长。屏幕四边等宽观感舒服，表盘和快应用很多也比较实用，重量质感这一块都还可以。",
			link: "https://www.mi.com/prod/xiaomi-shouhuan-9-pro",
		},
	],
	OnePlus: [
		{
			name: "OnePlus 13T",
			image: "/images/device/oneplus13t.webp",
			specs: "Gray / 16G + 1TB",
			description: "Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
