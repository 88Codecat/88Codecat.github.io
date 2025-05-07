import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme(
	{
		pure: true,
		logo: 'assets/image/logo.png',
		favicon: 'assets/image/favicon.ico',
		navbar,
		sidebar,

		//打印内容
		print: false,

		//页面路径导航
		breadcrumb: false,

		markdown: {
			// 启用图片懒加载
			imgLazyload: true,
		    // 启用图片标记
			imgMark: true,
		}
	},
	{ custom: true }
)