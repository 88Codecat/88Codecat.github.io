import { hasGlobalComponent } from "D:/MyBlog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_48711644e05e52bf442d11af5722cfd4/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/MyBlog/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/MyBlog/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_0c8e649ef05594223e4003eb989b18d2/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
