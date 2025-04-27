import { GitContributors } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_3af858c91994abeca046bd8439278c94/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_3af858c91994abeca046bd8439278c94/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
