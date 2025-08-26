export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"assets/image/logo.png\",\"print\":false,\"breadcrumb\":false,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[{\"text\":\"javascript\",\"prefix\":\"/js/\",\"link\":\"/js/\"},{\"text\":\"git\",\"prefix\":\"/git/\",\"link\":\"/git/\"},{\"text\":\"React\",\"prefix\":\"/react/\",\"link\":\"/react/\"},{\"text\":\"计算机网络\",\"prefix\":\"/network/\",\"link\":\"/network/\"},{\"text\":\"Linux\",\"prefix\":\"/linux/\",\"link\":\"/linux/\"},{\"text\":\"nodejs\",\"prefix\":\"/nodejs/\",\"link\":\"/nodejs/\"}],\"sidebar\":{\"/js/\":[\"\",{\"text\":\"javascript基础\",\"link\":\"js-base/READEME.md\",\"children\":[{\"text\":\"数据类型\",\"prefix\":\"js-base/data-type\",\"children\":[\"READEME\",\"array\",\"number\",\"string\",\"type\"],\"collapsible\":false},{\"text\":\"数组\",\"prefix\":\"js-base/array\",\"children\":[\"READEME\",\"1\"],\"collapsible\":false}],\"collapsible\":true},{\"text\":\"浏览器\",\"prefix\":\"/js-browser/\",\"link\":\"js-browser/READEME.md\",\"children\":[\"\"],\"collapsible\":true},{\"text\":\"其他\",\"children\":[\"\"],\"collapsible\":true}],\"/git/\":[\"\",\"1\"],\"/linux\":[\"\",\"order\"],\"/nodejs\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
