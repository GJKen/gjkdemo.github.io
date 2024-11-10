[Gmeek](https://github.com/Meekdai/Gmeek) 博客完全依托 Github, 提供域名, 无需服务器, 比起传统的服务器建站更方便快捷.

# 搭建博客

**如何搭建博客我就不写了, 这里主要记录一些js和css的修改.**
搭建详情请看官方文档: https://blog.meekdai.com/tag.html#gmeek

> [!WARNING]
> 利用 Github Page 搭建的网站内容是完全公开的, 请注意不要上传自己的隐私!!!

# Config.json 小妙用

## subTitle - js插入

代码:

```json
"subTitle":"<script>document.getElementById('content').innerHTML = `<div style='text-align: center;'><p>CV工程师,</p><p>一个又菜又爱玩, 喜欢瞎折腾的流浪者.</p></div>`;</script>",
```

效果图:

`Gmeek-html<img src="https://i0.img2ipfs.com/ipfs/QmPJLQrhBg9opKvbgNGqQaEopEKJnsH3thbH7wNbocp6VF">`

从图中可以看到, 可用js插入html实现修改文字.

## subTitle - 隐藏

"subTitle":" ",

效果图:

`Gmeek-html<img src="https://i0.img2ipfs.com/ipfs/Qmei764zAMx9fXgotWbrrwizXRsrk42GGiKor2Zqo8hFgy">`

可以用空白字符的方式, 隐藏subTitle必须字段, 无需使用js隐藏.

# 记录功能块代码

代码摘抄自网络, 有删改, 都存放在仓库, 使用 jsdelivr CDN 加速.

## [ArticleToc.js](https://github.com/GJKen/gjken.github.io/blob/main/static/ArticleToc.js) - 文章增加目录列表+一键返回顶部按钮

> 来源: [Github](https://github.com/cao-gift/cao-gift.github.io?tab=readme-ov-file)
> 修改-切换博客主题时颜色不一致, 增加滚动同步定位章节, 修改动画和样式.
> 已知bug: 给body增加`backdrop-filter: blur(30px);`样式时, 会出现滚动错误. 待后续修复.

图示:

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/QmZZc1AEpcDTUiasyp6qkGx4h2K7btob9U4c9RAgrTMnx1">`

## [lightbox-gjken.js](https://github.com/GJKen/gjken.github.io/blob/main/static/lightbox-gjken.js) - 灯箱

> 来源: [Github](https://github.com/tiengming/tiengming.github.io)
> 修改-增加图片拖动, 增加点击图片外部退出灯箱.
> 已知bug: 当图片缩放过后,再对图片拖动会有微小偏差,~~我代码能力实在是太菜了😭~~.

通过点击可大图浏览文章中的图片, 适合一些图片较多的文章.

Windows 端通过 Ctrl+滚轮放大, 同时滚轮可左右切换图片.

Android 端可通过滑动屏幕左右切换图片.

## [GmeekVercount_uv.js](https://github.com/GJKen/gjken.github.io/blob/main/static/GmeekVercount_uv.min.js) - 网站增加访客计数器

> Vercount [Github](https://github.com/EvanNotFound/vercount)
> pv修改成uv计数

建议放入 `allHead` 里全站添加js.

```json
"allHead":"<script src='https://cdn.jsdelivr.net/gh/gjken/gjkdemo.github.io@main/static/GmeekVercount_uv.min.js'></script>"
```

## [ImgLazyLoad.js](https://github.com/GJKen/gjken.github.io/blob/main/static/ImgLazyLoad.js) - 图片懒加载

> 来源: [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

未实际测试过.

## [NumPagination.js](https://github.com/GJKen/gjken.github.io/blob/main/static/NumPagination.js) - 主页添加数字分页条

> 来源 [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

未实际测试过.

# 修改网站样式

[primer.css](https://github.com/GJKen/gjken.github.io/blob/main/static/primer.css), 这个文件用来控制网站的整体样式, 存放在我的git仓库, 使用 jsdelivr CDN 加速.
对应的选择器只张贴出关键 CSS 部分的修改, ~~不然代码太多了.~~

## 文章 \<html> 标签样式

`[data-color-mode]`
优化 light & dark 主题下的背景色.

<details><summary>修改前</summary>

```css
[data-color-mode] {
	color: var(--fgColor-default, var(--color-fg-default));
	background-color: var(--bgColor-default, var(--color-canvas-default))
}
```

</details>
<details><summary>修改后</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection {
	--html-bgColor: #151c2f;/* 增加 */
}
:root {
	--html-bgColor: #fff;/* 增加 */
}
[data-color-mode] {
	background-color: var(--html-bgColor)
}
```

</details>

## 博客 滚动条 样式

因为默认的 primer.css 里没有写, 所以下面都是增加代码.

<details><summary>CSS Code</summary>

```css
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: #9fc6e3;
}

/* Firefox */
html {
	scrollbar-color: #9fc6e3 transparent;
	scrollbar-width: thin;
}
```

</details>

## 文章 \<code> 标签样式

`.markdown-body code, .markdown-body tt`
优化 light & dark 主题下的背景色.

<details><summary>修改前</summary>

```css
.markdown-body code,
.markdown-body tt {
	background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));
}
```

</details>
<details><summary>修改后</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection {
	--markdown-code-color: #3bf6ff52;/* 增加 */
}
:root {
	--markdown-code-color: #4d4d4d38;/* 增加 */
}
.markdown-body code,
.markdown-body tt {
	background-color: var(--markdown-code-color);
}
```

</details>

## 文章 \<h1> 标签的样式

`.markdown-body h1`
优化 light & dark 主题下的背景色

<details><summary>修改前</summary>

```css
.markdown-body h1 {
	padding-bottom: .3em;
	font-size: 2em;
	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted))
}
```

</details>
<details><summary>修改后</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection {
	--markdown-h1-bgColor: #7dc2ff7a;/* 增加 */
}
:root {
	--markdown-h1-bgColor: #c8e5ff7a;/* 增加 */
}
.markdown-body h1 {
	background: var(--markdown-h1-bgColor);
	border-radius: 10px;
	font-size: 2em;
	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));
}
```

</details>

## 文章 \<h2> 标签样式

`.markdown-body h2`
增加下划线动画

<details><summary>修改前</summary>

```css
.markdown-body h2 {
	padding-bottom: .3em;
	font-size: 1.5em;
	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted))
}
```

</details>

<details><summary>修改后</summary>

```css
.markdown-body h2 {
	font-size: 1.5em;
	border-bottom: 1px solid var(--borderColor-muted, var(--color-border-muted));
	background: linear-gradient(45deg, #90d1ff, transparent) no-repeat left bottom;
	background-size: 0 2px;
	-webkit-transition: all 0.25s ease;
	transition: all 0.25s ease;
}
/* 增加hover */
.markdown-body h2:hover {
	background-size: 100% 2px;
}
```

</details>

## 文章 \<img> 标签样式

`.markdown-body img`

优化 light & dark 主题下的阴影色

<details><summary>修改前</summary>

```css
.markdown-body img {
	background-color: var(--bgColor-default, var(--color-canvas-default))
}
```

</details>

<details><summary>修改后</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection 
	--markdown-imgShadow: #b8fffc29;/* 增加 */
}
:root {
	--markdown-imgShadow: #0000000d;/* 增加 */
}
.markdown-body img {
	box-shadow: 0 4px 8px 0 var(--markdown-imgShadow), 0 -4px 8px 0 var(--markdown-imgShadow);
}
```

</details>

## 文章 \<a> 标签样式

`a`
优化 dark 主题下的链接色, 去掉原下划线, 增加下划线动画

<details><summary>修改前</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection {
	--color-accent-fg: #2f81f7;
}
a {
	background-color: rgba(0, 0, 0, 0)
}
a:hover {
	text-decoration: underline
}
```

</details>

<details><summary>修改后</summary>

```css
[data-color-mode=light][data-light-theme=dark],
[data-color-mode=light][data-light-theme=dark]::selection,
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark]::selection {
	--color-accent-fg: #20d4ff;
}
a {
	text-decoration: none !important;
	background: #0000;
	background: linear-gradient(#90d1ff, #90d1ff) no-repeat left bottom;
	background-size: 0 2px;
	-webkit-transition: all 0.25s ease;
	transition: all 0.25s ease;
}
a:hover {
	background-size: 100% 2px;
}
```

</details>

# 使用 Gmeek-html 自定义标签, 给博客插入图片, 防止链接自动转换

Github 在issues 插入的图片也会自动转换为 Github 的地址.
为了文章的多样性, 在Gmeek的 `v2.19` 版本中添加了支持 html 标签的功能.
示例代码:

```html
`Gmeek-html<img src="https://img.jpg" style="text-align: center;">`
```

实际展示:

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/Qme1BvwvqLcS86jQqwfxVEFrdNPusCqRn3APhdHGEKLtDb" style="text-align: center;">`

# 添加自定义单篇文章代码

```html
<span id="busuanzi">
:heart:感谢第<span></span>小伙伴的<span></span>次访问关于页面.
</span>

<!-- ##{"script":"<script>document.getElementById('user-content-busuanzi').id='busuanzi_container_site_uv';busuanzi=document.getElementById('busuanzi_container_site_uv');busuanzi.style.display='none';busuanzi.childNodes[1].id='busuanzi_value_site_uv';busuanzi.childNodes[3].id='busuanzi_value_site_pv';</script><script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>","style":"<style>#busuanzi_value_site_uv{color:red}#busuanzi_value_site_pv{color:red}</style>"}## -->
```

# Readme.md

📄 > 文章总数
💬 > 评论总数
🌺 > 是统计的所有文章的字符数
⏰ > 最后一次 Actions 的时间
