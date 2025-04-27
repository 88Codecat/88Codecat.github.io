import { CodeTabs } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_41d591d7944798e06262821d3818c747/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_41d591d7944798e06262821d3818c747/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-markdown-t_41d591d7944798e06262821d3818c747/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
