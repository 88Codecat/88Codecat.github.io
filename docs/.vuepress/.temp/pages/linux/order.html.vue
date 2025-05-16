<template><div><h1 id="ubuntu常用命令" tabindex="-1"><a class="header-anchor" href="#ubuntu常用命令"><span>Ubuntu常用命令</span></a></h1>
<p>一些<strong>Ubuntu常用命令</strong></p>
<hr>
<h2 id="文件和目录操作" tabindex="-1"><a class="header-anchor" href="#文件和目录操作"><span>文件和目录操作</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>常用选项/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ls</code></td>
<td>列出目录内容</td>
<td><code v-pre>[选项] [目录名]</code><br>常用：<code v-pre>-l</code>（长格式），<code v-pre>-a</code>（显示隐藏文件）</td>
</tr>
<tr>
<td><code v-pre>cd</code></td>
<td>改变当前目录</td>
<td><code v-pre>[目录名]</code><br>特殊：<code v-pre>cd ~</code>（回到主目录），<code v-pre>cd ..</code>（上一级）</td>
</tr>
<tr>
<td><code v-pre>pwd</code></td>
<td>显示当前目录路径</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>mkdir</code></td>
<td>创建新目录</td>
<td><code v-pre>[选项] 目录名</code><br>常用：<code v-pre>-p</code>（递归创建）</td>
</tr>
<tr>
<td><code v-pre>rmdir</code></td>
<td>删除空目录</td>
<td><code v-pre>[目录名]</code></td>
</tr>
<tr>
<td><code v-pre>rm</code></td>
<td>删除文件或目录</td>
<td><code v-pre>[选项] 文件/目录</code><br>常用：<code v-pre>-r</code>（递归删除），<code v-pre>-f</code>（强制删除）</td>
</tr>
<tr>
<td><code v-pre>cp</code></td>
<td>复制文件或目录</td>
<td><code v-pre>[选项] 源目标</code><br>常用：<code v-pre>-r</code>（目录递归复制），<code v-pre>-i</code>（确认覆盖）</td>
</tr>
<tr>
<td><code v-pre>mv</code></td>
<td>移动或重命名</td>
<td><code v-pre>[选项] 源 目标</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="文件内容查看与编辑" tabindex="-1"><a class="header-anchor" href="#文件内容查看与编辑"><span>文件内容查看与编辑</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>cat</code></td>
<td>显示文件内容</td>
<td><code v-pre>[文件名]</code></td>
</tr>
<tr>
<td><code v-pre>more</code></td>
<td>分页查看文件</td>
<td><code v-pre>[文件名]</code></td>
</tr>
<tr>
<td><code v-pre>less</code></td>
<td>分页查看（比more功能更丰富）</td>
<td><code v-pre>[文件名]</code></td>
</tr>
<tr>
<td><code v-pre>touch</code></td>
<td>创建空文件或更新时间</td>
<td><code v-pre>[文件名]</code></td>
</tr>
<tr>
<td><code v-pre>nano</code> / <code v-pre>vim</code> / <code v-pre>vi</code></td>
<td>编辑文件</td>
<td><code v-pre>[文件名]</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="文件搜索" tabindex="-1"><a class="header-anchor" href="#文件搜索"><span>文件搜索</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>常用参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>find</code></td>
<td>查找文件</td>
<td><code v-pre>路径 条件</code>，如<code v-pre>find /home -name &quot;*.txt&quot;</code></td>
</tr>
<tr>
<td><code v-pre>locate</code></td>
<td>快速查找</td>
<td><code v-pre>[文件名]</code>，需先更新数据库：<code v-pre>sudo updatedb</code></td>
</tr>
<tr>
<td><code v-pre>which</code></td>
<td>查找命令路径</td>
<td><code v-pre>[命令]</code></td>
</tr>
<tr>
<td><code v-pre>whereis</code></td>
<td>查找程序及相关文件</td>
<td><code v-pre>[命令]</code></td>
</tr>
<tr>
<td><code v-pre>grep</code></td>
<td>文本内容搜索</td>
<td><code v-pre>[选项] 模式 文件</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="文件权限与所有者" tabindex="-1"><a class="header-anchor" href="#文件权限与所有者"><span>文件权限与所有者</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>chmod</code></td>
<td>改变权限</td>
<td><code v-pre>[权限模式] 文件</code><br>如：<code v-pre>chmod 755 文件</code></td>
</tr>
<tr>
<td><code v-pre>chown</code></td>
<td>改变所有者</td>
<td><code v-pre>[所有者]:[组] 文件</code></td>
</tr>
<tr>
<td><code v-pre>chgrp</code></td>
<td>改变组</td>
<td><code v-pre>[组名] 文件</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>uname</code></td>
<td>显示系统信息</td>
<td><code v-pre>-a</code>（全部信息）</td>
</tr>
<tr>
<td><code v-pre>uptime</code></td>
<td>查看系统运行时间</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>top</code></td>
<td>实时监控系统进程</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>htop</code></td>
<td>更友好的top</td>
<td>需要安装</td>
</tr>
<tr>
<td><code v-pre>df</code></td>
<td>查看磁盘空间</td>
<td><code v-pre>-h</code>（人类可读）</td>
</tr>
<tr>
<td><code v-pre>free</code></td>
<td>查看内存使用</td>
<td><code v-pre>-h</code>（人类可读）</td>
</tr>
<tr>
<td><code v-pre>hostname</code></td>
<td>查看或设置主机名</td>
<td>无参数</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>whoami</code></td>
<td>显示当前用户</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>id</code></td>
<td>显示用户ID信息</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>adduser</code> / <code v-pre>useradd</code></td>
<td>添加新用户</td>
<td><code v-pre>[用户名]</code></td>
</tr>
<tr>
<td><code v-pre>deluser</code> / <code v-pre>userdel</code></td>
<td>删除用户</td>
<td><code v-pre>[用户名]</code></td>
</tr>
<tr>
<td><code v-pre>passwd</code></td>
<td>修改用户密码</td>
<td><code v-pre>[用户名]</code></td>
</tr>
<tr>
<td><code v-pre>groups</code></td>
<td>查看用户组</td>
<td><code v-pre>[用户名]</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="网络操作" tabindex="-1"><a class="header-anchor" href="#网络操作"><span>网络操作</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ifconfig</code></td>
<td>查看网络接口（已废弃，用<code v-pre>ip</code>替代）</td>
<td><code v-pre>-a</code></td>
</tr>
<tr>
<td><code v-pre>ip</code></td>
<td>查看/配置网络</td>
<td><code v-pre>addr</code>，<code v-pre>link</code></td>
</tr>
<tr>
<td><code v-pre>ping</code></td>
<td>测试网络连通性</td>
<td><code v-pre>地址</code></td>
</tr>
<tr>
<td><code v-pre>netstat</code></td>
<td>查看网络连接（已废弃，用<code v-pre>ss</code>替代）</td>
<td><code v-pre>-tuln</code></td>
</tr>
<tr>
<td><code v-pre>ss</code></td>
<td>查看套接字</td>
<td><code v-pre>-tuln</code></td>
</tr>
<tr>
<td><code v-pre>curl</code></td>
<td>传输数据，测试HTTP请求</td>
<td>URL</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理"><span>系统管理</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sudo</code></td>
<td>以超级用户权限执行命令</td>
<td><code v-pre>[命令]</code></td>
</tr>
<tr>
<td><code v-pre>systemctl</code></td>
<td>管理系统服务</td>
<td><code v-pre>start/stop/restart/status 服务名</code></td>
</tr>
<tr>
<td><code v-pre>service</code></td>
<td>管理旧版服务</td>
<td><code v-pre>start/stop/restart 服务名</code></td>
</tr>
<tr>
<td><code v-pre>reboot</code></td>
<td>重启系统</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>shutdown</code></td>
<td>关机</td>
<td><code v-pre>-h now</code>（立即关机）</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="软件包管理-apt" tabindex="-1"><a class="header-anchor" href="#软件包管理-apt"><span>软件包管理（apt）</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>apt update</code></td>
<td>更新软件包列表</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>apt upgrade</code></td>
<td>升级已安装软件</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>apt install</code></td>
<td>安装软件包</td>
<td><code v-pre>[包名]</code></td>
</tr>
<tr>
<td><code v-pre>apt remove</code></td>
<td>卸载软件包</td>
<td><code v-pre>[包名]</code></td>
</tr>
<tr>
<td><code v-pre>apt autoremove</code></td>
<td>自动删除不需要的包</td>
<td>无参数</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="压缩与解压" tabindex="-1"><a class="header-anchor" href="#压缩与解压"><span>压缩与解压</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>tar</code></td>
<td>打包/解包</td>
<td><code v-pre>-cvf</code>（打包），<code v-pre>-xvf</code>（解包）</td>
</tr>
<tr>
<td><code v-pre>zip</code> / <code v-pre>unzip</code></td>
<td>压缩/解压</td>
<td>如：<code v-pre>zip</code>，<code v-pre>unzip</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="其他实用命令" tabindex="-1"><a class="header-anchor" href="#其他实用命令"><span>其他实用命令</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>示例/参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>date</code></td>
<td>显示当前时间</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>echo</code></td>
<td>输出文本</td>
<td><code v-pre>hello world</code></td>
</tr>
<tr>
<td><code v-pre>sleep</code></td>
<td>暂停指定秒数</td>
<td><code v-pre>秒数</code></td>
</tr>
<tr>
<td><code v-pre>history</code></td>
<td>查看命令历史</td>
<td>无参数</td>
</tr>
<tr>
<td><code v-pre>alias</code></td>
<td>设置命令别名</td>
<td><code v-pre>alias ll='ls -l'</code></td>
</tr>
</tbody>
</table>
<hr>
<p>当然！下面是关于 <strong><code v-pre>vim</code></strong> 和 <strong><code v-pre>nano</code></strong> 两个常用文本编辑器的简介和比较，帮助你了解它们的特点及使用场景。</p>
<hr>
<h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim"><span><code v-pre>vim</code></span></a></h2>
<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3>
<table>
<thead>
<tr>
<th>操作</th>
<th>命令或说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>进入插入模式</td>
<td><code v-pre>i</code>（在光标前插入）<br><code v-pre>a</code>（在光标后插入）<br><code v-pre>o</code>（在下一行插入新行）</td>
</tr>
<tr>
<td>退出插入模式</td>
<td><code v-pre>Esc</code></td>
</tr>
<tr>
<td>保存文件</td>
<td><code v-pre>:w</code></td>
</tr>
<tr>
<td>退出</td>
<td><code v-pre>:q</code></td>
</tr>
<tr>
<td>保存并退出</td>
<td><code v-pre>:wq</code> 或 <code v-pre>:x</code></td>
</tr>
<tr>
<td>不保存退出</td>
<td><code v-pre>:q!</code></td>
</tr>
<tr>
<td>查找文本</td>
<td><code v-pre>/关键词</code>，按<code v-pre>n</code>查找下一个</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="nano" tabindex="-1"><a class="header-anchor" href="#nano"><span><code v-pre>nano</code></span></a></h2>
<h3 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h3>
<table>
<thead>
<tr>
<th>操作</th>
<th>快捷键</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>保存</td>
<td><code v-pre>Ctrl + O</code></td>
<td>保存文件</td>
</tr>
<tr>
<td>退出</td>
<td><code v-pre>Ctrl + X</code></td>
<td>退出编辑器</td>
</tr>
<tr>
<td>搜索</td>
<td><code v-pre>Ctrl + W</code></td>
<td>查找文本</td>
</tr>
<tr>
<td>粘贴</td>
<td><code v-pre>Ctrl + U</code></td>
<td>粘贴剪贴板内容</td>
</tr>
<tr>
<td>剪切行</td>
<td><code v-pre>Ctrl + K</code></td>
<td>剪切当前行</td>
</tr>
</tbody>
</table>
<hr>
</div></template>


