import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/index.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/data-type/\",\"title\":\"Data Type\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Data Type\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
