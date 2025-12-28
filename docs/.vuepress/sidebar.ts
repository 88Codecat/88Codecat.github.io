import { sidebar } from 'vuepress-theme-hope';
import js from './js-sidebar';

export default sidebar({
	'/js/': js,
	'/git/': [
		'',
		'1'
	],
	'/linux': [
		'',
		'order'
	],
	'/nodejs': "structure",
	'resume': "structure",

})