import{_ as s,v as a,b as e,R as t}from"./chunks/framework.caa0fbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/学习/打包与运行/article-son/借用 systemctl service 管理服务.md","filePath":"markdown/学习/打包与运行/article-son/借用 systemctl service 管理服务.md"}'),n={name:"markdown/学习/打包与运行/article-son/借用 systemctl service 管理服务.md"},l=t(`<h4 id="_1、添加-systemctl-service-配置-waterapi为例-etc-systemd-system-waterapi-service" tabindex="-1">1、添加 systemctl service 配置，waterapi为例：/etc/systemd/system/waterapi.service <a class="header-anchor" href="#_1、添加-systemctl-service-配置-waterapi为例-etc-systemd-system-waterapi-service" aria-label="Permalink to &quot;1、添加 systemctl service 配置，waterapi为例：/etc/systemd/system/waterapi.service&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[Unit]</span></span>
<span class="line"><span style="color:#A6ACCD;">Description=waterapi</span></span>
<span class="line"><span style="color:#A6ACCD;">After=syslog.target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Service]</span></span>
<span class="line"><span style="color:#A6ACCD;">ExecStart=/usr/bin/java -jar /data/sss/water/waterapi.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">SuccessExitStatus=143</span></span>
<span class="line"><span style="color:#A6ACCD;">SuccessExitStatus=143</span></span>
<span class="line"><span style="color:#A6ACCD;">Restart=on-failure</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Install]</span></span>
<span class="line"><span style="color:#A6ACCD;">WantedBy=multi-user.target</span></span></code></pre></div><h4 id="_2、通过-systemctl-指令操控服务" tabindex="-1">2、通过 systemctl 指令操控服务： <a class="header-anchor" href="#_2、通过-systemctl-指令操控服务" aria-label="Permalink to &quot;2、通过 systemctl 指令操控服务：&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl enable waterapi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart waterapi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop waterapi</span></span></code></pre></div><p>配置好后之后，服务更新的简单操作：</p><ol><li>更新 jar 文件</li><li>运行 <code>systemctl restart waterapi</code> 即可</li></ol>`,6),p=[l];function c(r,i,o,y,m,d){return a(),e("div",null,p)}const _=s(n,[["render",c]]);export{A as __pageData,_ as default};
