<template><div><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>npm</span></a></h1>
<p><code v-pre>npm</code>（全称 Node Package Manager，官网
<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2F" title="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">www.npmjs.com/</a>）是 Node.js 的包管理工具，基于命令行的工具用于项目中安装、升级、移除和管理依赖项。</p>
<h3 id="npm-命令" tabindex="-1"><a class="header-anchor" href="#npm-命令"><span>npm 命令</span></a></h3>
<ol>
<li><code v-pre>npm init</code>：初始化一个新的 npm 项目，创建 package.json 文件。</li>
<li><code v-pre>npm install</code>：安装一个包或一组包，并且会在当前目录存放一个node_modules。</li>
<li><code v-pre>npm install &lt;package-name&gt;</code>：安装指定的包。</li>
<li><code v-pre>npm install &lt;package-name&gt; --save</code>：安装指定的包，并将其添加到 package.json 文件中的依赖列表中。</li>
<li><code v-pre>npm install &lt;package-name&gt; --save-dev</code>：安装指定的包，并将其添加到 package.json 文件中的开发依赖列表中。</li>
<li><code v-pre>npm install -g &lt;package-name&gt;</code>：全局安装指定的包。</li>
<li><code v-pre>npm update &lt;package-name&gt;</code>：更新指定的包。</li>
<li><code v-pre>npm uninstall &lt;package-name&gt;</code>：卸载指定的包。</li>
<li><code v-pre>npm run &lt;script-name&gt;</code>：执行 package.json 文件中定义的脚本命令。</li>
<li><code v-pre>npm search &lt;keyword&gt;</code>：搜索 npm 库中包含指定关键字的包。</li>
<li><code v-pre>npm info &lt;package-name&gt;</code>：查看指定包的详细信息。</li>
<li><code v-pre>npm list</code>：列出当前项目中安装的所有包。</li>
<li><code v-pre>npm outdated</code>：列出当前项目中需要更新的包。</li>
<li><code v-pre>npm audit</code>：检查当前项目中的依赖项是否存在安全漏洞。</li>
<li><code v-pre>npm publish</code>：发布自己开发的包到 npm 库中。</li>
<li><code v-pre>npm login</code>：登录到 npm 账户。</li>
<li><code v-pre>npm logout</code>：注销当前 npm 账户。</li>
<li><code v-pre>npm link</code>: 将本地模块链接到全局的 <code v-pre>node_modules</code> 目录下</li>
<li><code v-pre>npm config list</code> 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）</li>
<li><code v-pre>npm get registry</code> 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址</li>
<li><code v-pre>npm set registry</code> <code v-pre>npm config set registry &lt;registry-url&gt;</code> 命令，将 registry 配置项的值修改为指定的 <code v-pre>&lt;registry-url&gt;</code> 地址</li>
</ol>
<h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>Package json</span></a></h3>
<p>执行npm init 便可以初始化一个package.json</p>
<ol>
<li><code v-pre>name</code>：项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。</li>
<li><code v-pre>version</code>：项目版本号，通常采用语义化版本号规范。</li>
<li><code v-pre>description</code>：项目描述。</li>
<li><code v-pre>main</code>：项目的主入口文件路径，通常是一个 JavaScript 文件。</li>
<li><code v-pre>keywords</code>：项目的关键字列表，方便他人搜索和发现该项目。</li>
<li><code v-pre>author</code>：项目作者的信息，包括姓名、邮箱、网址等。</li>
<li><code v-pre>license</code>：项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。</li>
<li><code v-pre>dependencies</code>：项目所依赖的包的列表，这些包会在项目运行时自动安装。</li>
<li><code v-pre>devDependencies</code>：项目开发过程中所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。</li>
<li><code v-pre>peerDependencies</code>：项目的同级依赖，即项目所需要的模块被其他模块所依赖。</li>
<li><code v-pre>scripts</code>：定义了一些脚本命令，比如启动项目、运行测试等。</li>
<li><code v-pre>repository</code>：项目代码仓库的信息，包括类型、网址等。</li>
<li><code v-pre>bugs</code>：项目的 bug 报告地址。</li>
<li><code v-pre>homepage</code>：项目的官方网站地址或者文档地址。</li>
</ol>
</div></template>


