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

从图中可以看到, 可用js插入html实现修改文字

## subTitle - 隐藏

"subTitle":" ",

效果图:

`Gmeek-html<img src="https://i0.img2ipfs.com/ipfs/Qmei764zAMx9fXgotWbrrwizXRsrk42GGiKor2Zqo8hFgy">`

可以用空白字符的方式, 隐藏subTitle必须字段, 无需使用js隐藏

# 记录功能块代码

代码摘抄自网络, 有删改, 基本上都存放在仓库

## [ArticleToc.js](https://github.com/GJKen/gjken.github.io/blob/main/static/ArticleToc.js) - 文章增加目录列表+一键返回顶部按钮

> 来源: [Github](https://github.com/cao-gift/cao-gift.github.io?tab=readme-ov-file)
修改-切换博客主题时颜色不一致

图示:

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/QmZZc1AEpcDTUiasyp6qkGx4h2K7btob9U4c9RAgrTMnx1">`

## [lightbox-gjken.js](https://github.com/GJKen/gjken.github.io/blob/main/static/lightbox-gjken.js) - 灯箱

可以放大浏览文章中的图片, 适合一些图片较多的文章.

> 来源: [Github](https://github.com/tiengming/tiengming.github.io)
修改-增加图片拖动, ~~代码能力实在是太菜了,写的有点问题~~

## [GmeekVercount_uv.js](https://github.com/GJKen/gjken.github.io/blob/main/static/GmeekVercount_uv.min.js) - 网站增加访客计数器
> Vercount [Github](https://github.com/EvanNotFound/vercount)
> pv修改成uv计数

建议放入 `allHead` 里全站添加js
```json
"allHead":"<script src='https://cdn.jsdelivr.net/gh/gjken/gjkdemo.github.io@main/static/GmeekVercount_uv.min.js'></script>"
```

## [ImgLazyLoad.js](https://github.com/GJKen/gjken.github.io/blob/main/static/ImgLazyLoad.js) - 图片懒加载

未实际测试过

> 来源: [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

## [NumPagination.js](https://github.com/GJKen/gjken.github.io/blob/main/static/NumPagination.js) - 主页添加数字分页条
> 来源 [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

未实际测试过

## [primer.css](https://github.com/GJKen/gjken.github.io/blob/main/static/primer.css) - 修改网站样式

这个文件用来控制网站的整体样式, 由于改动很多就不展示了
放入了我的仓库
并使用 jsdelivr CDN 加速

# 使用Gmeek-html自定义标签, 给博客插入图片, 防止链接自动转换

Github在issues插入的图片也会自动转换为github的地址.
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
:heart:感谢第<span></span>小伙伴的<span></span>次访问关于页面。
</span>

<!-- ##{"script":"<script>document.getElementById('user-content-busuanzi').id='busuanzi_container_site_uv';busuanzi=document.getElementById('busuanzi_container_site_uv');busuanzi.style.display='none';busuanzi.childNodes[1].id='busuanzi_value_site_uv';busuanzi.childNodes[3].id='busuanzi_value_site_pv';</script><script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>","style":"<style>#busuanzi_value_site_uv{color:red}#busuanzi_value_site_pv{color:red}</style>"}## -->
```

# Readme.md
📄 > 文章总数
💬 > 评论总数
🌺 > 是统计的所有文章的字符数
⏰ > 最后一次Actions的时间