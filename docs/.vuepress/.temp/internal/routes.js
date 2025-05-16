export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/js/1.html", { loader: () => import(/* webpackChunkName: "js_1.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/1.html.js"), meta: {"title":"JavaScript数组对象常见的数组内置方法："} }],
  ["/js/array.html", { loader: () => import(/* webpackChunkName: "js_array.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/array.html.js"), meta: {"title":"数组"} }],
  ["/js/number.html", { loader: () => import(/* webpackChunkName: "js_number.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/number.html.js"), meta: {"title":"字符串类型"} }],
  ["/js/", { loader: () => import(/* webpackChunkName: "js_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/index.html.js"), meta: {"title":"JS首页"} }],
  ["/js/string.html", { loader: () => import(/* webpackChunkName: "js_string.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/string.html.js"), meta: {"title":"数字类型"} }],
  ["/js/type.html", { loader: () => import(/* webpackChunkName: "js_type.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/js/type.html.js"), meta: {"title":"基本类型"} }],
  ["/linux/order.html", { loader: () => import(/* webpackChunkName: "linux_order.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/linux/order.html.js"), meta: {"title":"Ubuntu常用命令"} }],
  ["/linux/", { loader: () => import(/* webpackChunkName: "linux_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/linux/index.html.js"), meta: {"title":"Linux学习"} }],
  ["/network/", { loader: () => import(/* webpackChunkName: "network_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/network/index.html.js"), meta: {"title":""} }],
  ["/react/", { loader: () => import(/* webpackChunkName: "react_index.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/react/index.html.js"), meta: {"title":"react"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MyBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
