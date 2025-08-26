import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/2.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/2.html\",\"title\":\"npm run 的原理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.81,\"words\":543},\"filePathRelative\":\"nodejs/2.md\"}")
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
