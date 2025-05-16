import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/js/': [
		'',
		{
			text: '数据类型',
			children: ['type','number','string','array'],
			collapsible: true
		},
		{
			text: '其他',
			children: ['1'],
			collapsible: true
		},
	],
	'/linux':[
		'',
		'order'
	]

})