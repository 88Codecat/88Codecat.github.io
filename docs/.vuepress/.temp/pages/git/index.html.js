import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/git/index.html.vue"
const data = JSON.parse("{\"path\":\"/git/\",\"title\":\"Git学习\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Git学习\",\"next\":false,\"footer\":\"This site is served by GitHub Pages\",\"copyright\":false,\"breadcrumb\":false},\"readingTime\":{\"minutes\":0.25,\"words\":75},\"filePathRelative\":\"git/README.md\"}")
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
