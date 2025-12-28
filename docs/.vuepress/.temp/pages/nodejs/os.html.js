import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/os.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/os.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"nodejs/os.md\"}")
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
