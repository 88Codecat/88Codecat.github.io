import { navbar } from 'vuepress-theme-hope';

export default navbar([
	{
		text: '通关指南',
		link: '/js/',
		target: '_self'
	},
	{
		text: 'React',
		prefix: '/react/',
		link: '/react/'
	},
	{
		text: '计算机网络',
		prefix: '/network/',
		link: '/network/'
	}
])