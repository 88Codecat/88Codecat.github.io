import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/MyBlog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_368e8d1b32a71651d15b31117c29a275/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-catalog@2._bdd6f31019d65d323c1facfc33bc3ec4/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/MyBlog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_368e8d1b32a71651d15b31117c29a275/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
