import { hasGlobalComponent } from "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/MyBlog/node_modules/.pnpm/vuepress-plugin-components@_fe2913fa62f910714d3d042d7e9f9a53/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
