export default [
  '',
  {
    text: 'javascript基础',
    link: 'js-base/READEME.md',
    children: [
      {
        text: '数据类型',
        prefix: 'js-base/data-type',
        children: ['READEME', 'array', 'number', 'string', 'type'],
        collapsible: false
      },
      {
        text: '数组',
        prefix: 'js-base/array',
        children: ['READEME', '1'],
        collapsible: false
      }
    ],
    collapsible: true
  },
  {
    text: '浏览器',
    prefix: '/js-browser/',
    link: 'js-browser/READEME.md',
    children: [''],
    collapsible: true
  },
  {
    text: '其他',
    children: [''],
    collapsible: true
  }
]