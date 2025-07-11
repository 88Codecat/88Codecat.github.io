import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/REDEME.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/REDEME.html\",\"title\":\"NodeJs\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":\"nodejs/REDEME.md\"}")
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
