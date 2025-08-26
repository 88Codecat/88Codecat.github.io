<template><div><h1 id="npm-run-的原理" tabindex="-1"><a class="header-anchor" href="#npm-run-的原理"><span>npm run 的原理</span></a></h1>
<p>npm run 命令会读取项目根目录下 package.json 文件中的 &quot;scripts&quot; 字段。这个字段定义了可以执行的脚本命令：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "start"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"node server.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"webpack --mode=production"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "test"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"jest"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"nodemon app.js"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令执行流程" tabindex="-1"><a class="header-anchor" href="#命令执行流程"><span>命令执行流程</span></a></h2>
<p>当你运行 <code v-pre>npm run &lt;script-name&gt;</code> 时，npm 会按以下步骤执行：</p>
<p><strong>查找脚本</strong>：npm 在 package.json 的 scripts 字段中查找指定的脚本名称。</p>
<p><strong>环境变量设置</strong>：npm 会设置一些特殊的环境变量，包括将 目录添加到 PATH 中，这样就可以直接调用本地安装的包的可执行文件。</p>
<p><strong>Shell 执行</strong>：npm 使用系统的 shell（在 Unix 系统上通常是 /bin/sh，在 Windows 上是 cmd.exe）来执行脚本命令。</p>
<ul>
<li>先从当前项目的 <code v-pre>node_modules/.bin</code>去查找可执行命令</li>
<li>如果没找到就去全局的 <code v-pre>node_modules</code>去找可执行命令</li>
<li>如果还没找到就去环境变量查找</li>
<li>再找不到就进行报错</li>
</ul>
<p>nodejs 是跨平台的所以可执行命令兼容各个平台,找到会有三个可执行文件</p>
<ul>
<li>.sh文件是给Linux unix Macos 使用</li>
<li>.cmd 给windows的cmd使用</li>
<li>.ps1 给windows的powerShell 使用</li>
</ul>
<h2 id="path-环境变量的关键作用" tabindex="-1"><a class="header-anchor" href="#path-环境变量的关键作用"><span>PATH 环境变量的关键作用</span></a></h2>
<p>这是 npm run 最重要的特性之一。当脚本执行时，npm 会临时修改 PATH 环境变量，将项目的 <code v-pre>node_modules/.bin</code> 目录添加到 PATH 的开头。这意味着：</p>
<ul>
<li>你可以直接使用本地安装的包的命令，而不需要完整路径</li>
<li>例如，如果你本地安装了 webpack，可以在脚本中直接写 &quot;webpack&quot;，而不是 &quot;./node_modules/.bin/webpack&quot;</li>
</ul>
<h2 id="生命周期钩子" tabindex="-1"><a class="header-anchor" href="#生命周期钩子"><span>生命周期钩子</span></a></h2>
<p>npm 还支持生命周期钩子，会自动执行 pre 和 post 脚本：</p>
<ul>
<li>运行 <code v-pre>npm run build</code> 时，如果存在 <code v-pre>prebuild</code> 脚本会先执行</li>
<li>build 脚本执行完毕后，如果存在 <code v-pre>postbuild</code> 脚本会接着执行</li>
</ul>
<h2 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递"><span>参数传递</span></a></h2>
<p>可以通过 <code v-pre>--</code> 向脚本传递额外参数：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --coverage</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这会将 <code v-pre>--coverage</code> 参数传递给实际的测试命令。</p>
<p>npm run 的基本工作原理本质上是一个脚本执行器，通过修改环境变量和利用 shell 来执行定义在 package.json 中的命令。</p>
</div></template>


