import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/git/1.html.vue"
const data = JSON.parse("{\"path\":\"/git/1.html\",\"title\":\"常用命令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"常用命令\"},\"readingTime\":{\"minutes\":10.22,\"words\":3065},\"filePathRelative\":\"git/1.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
