import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/git/commit.html.vue"
const data = JSON.parse("{\"path\":\"/git/commit.html\",\"title\":\"Git常用操作命令 - 代码撤销和撤销同步# 已修改，但未暂存$ git diff # 列出所有的修改\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":6.47,\"words\":1941},\"filePathRelative\":\"git/commit.md\"}")
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
