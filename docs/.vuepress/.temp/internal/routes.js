export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/git/1.html", { loader: () => import(/* webpackChunkName: "git_1.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/git/1.html.js"), meta: {"title":"常用命令"} }],
  ["/git/", { loader: () => import(/* webpackChunkName: "git_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/git/index.html.js"), meta: {"title":"Git学习"} }],
  ["/js/", { loader: () => import(/* webpackChunkName: "js_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/index.html.js"), meta: {"title":"JS首页"} }],
  ["/linux/order.html", { loader: () => import(/* webpackChunkName: "linux_order.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/linux/order.html.js"), meta: {"title":"Ubuntu常用命令"} }],
  ["/linux/", { loader: () => import(/* webpackChunkName: "linux_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/linux/index.html.js"), meta: {"title":"Linux学习"} }],
  ["/network/", { loader: () => import(/* webpackChunkName: "network_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/network/index.html.js"), meta: {"title":""} }],
  ["/nodejs/REDEME.html", { loader: () => import(/* webpackChunkName: "nodejs_REDEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/REDEME.html.js"), meta: {"title":"NodeJs"} }],
  ["/react/", { loader: () => import(/* webpackChunkName: "react_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/react/index.html.js"), meta: {"title":"react"} }],
  ["/js/js-base/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-base_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/READEME.html.js"), meta: {"title":"JavaScript基础"} }],
  ["/js/js-browser/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-browser_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/READEME.html.js"), meta: {"title":"浏览器"} }],
  ["/js/js-base/array/1.html", { loader: () => import(/* webpackChunkName: "js_js-base_array_1.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/array/1.html.js"), meta: {"title":"JavaScript数组对象常见的数组内置方法："} }],
  ["/js/js-base/array/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-base_array_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/array/READEME.html.js"), meta: {"title":"数组READEME"} }],
  ["/js/js-base/data-type/array.html", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_array.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/array.html.js"), meta: {"title":"数组"} }],
  ["/js/js-base/data-type/number.html", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_number.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/number.html.js"), meta: {"title":"字符串类型"} }],
  ["/js/js-base/data-type/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/READEME.html.js"), meta: {"title":"数据类型READEME"} }],
  ["/js/js-base/data-type/string.html", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_string.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/string.html.js"), meta: {"title":"数字类型"} }],
  ["/js/js-base/data-type/type.html", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_type.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/type.html.js"), meta: {"title":"基本类型"} }],
  ["/js/js-browser/document/", { loader: () => import(/* webpackChunkName: "js_js-browser_document_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/document/index.html.js"), meta: {"title":""} }],
  ["/js/js-browser/event/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-browser_event_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/event/READEME.html.js"), meta: {"title":""} }],
  ["/js/js-browser/interface/READEME.html", { loader: () => import(/* webpackChunkName: "js_js-browser_interface_READEME.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/interface/READEME.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/nodejs/", { loader: () => import(/* webpackChunkName: "nodejs_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/index.html.js"), meta: {"title":"Nodejs"} }],
  ["/js/js-base/", { loader: () => import(/* webpackChunkName: "js_js-base_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/index.html.js"), meta: {"title":"Js Base"} }],
  ["/js/js-browser/", { loader: () => import(/* webpackChunkName: "js_js-browser_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/index.html.js"), meta: {"title":"Js Browser"} }],
  ["/js/js-base/array/", { loader: () => import(/* webpackChunkName: "js_js-base_array_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/array/index.html.js"), meta: {"title":"Array"} }],
  ["/js/js-base/data-type/", { loader: () => import(/* webpackChunkName: "js_js-base_data-type_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/index.html.js"), meta: {"title":"Data Type"} }],
  ["/js/js-browser/event/", { loader: () => import(/* webpackChunkName: "js_js-browser_event_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/event/index.html.js"), meta: {"title":"Event"} }],
  ["/js/js-browser/interface/", { loader: () => import(/* webpackChunkName: "js_js-browser_interface_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/interface/index.html.js"), meta: {"title":"Interface"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
