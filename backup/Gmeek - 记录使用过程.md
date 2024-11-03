[Gmeek](https://github.com/Meekdai/Gmeek) 博客完全依托 Github, 提供域名, 无需服务器, 比起传统的服务器建站更方便快捷.

# 搭建博客
**如何搭建博客我就不写了, 这里主要记录一些js和css的修改.**
搭建详情请看官方文档: https://blog.meekdai.com/tag.html#gmeek
> [!WARNING]
> 利用 Github Page 搭建的网站内容是完全公开的, 请注意不要上传自己的隐私!!!

# Config.json 小妙用
## subTitle
代码:
```json
"subTitle":"<script>document.getElementById('content').innerHTML = `<div style='text-align: center;'><p>CV工程师,</p><p>一个又菜又爱玩, 喜欢瞎折腾的流浪者.</p></div>`;</script>",
```
效果图:

`Gmeek-html<img src="https://i0.img2ipfs.com/ipfs/QmPJLQrhBg9opKvbgNGqQaEopEKJnsH3thbH7wNbocp6VF">`

从图中可以看到, 可用js插入html实现修改文字



# 记录功能块代码

代码摘抄自网络, 有删改

## ArticleToc.js - 文章增加目录列表+一键返回顶部按钮

> 来源: [Github](https://github.com/cao-gift/cao-gift.github.io?tab=readme-ov-file)
修改-切换博客主题时颜色不一致

图示:

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/QmZZc1AEpcDTUiasyp6qkGx4h2K7btob9U4c9RAgrTMnx1">`

## ImgLazyLoad.js - 图片懒加载

> 来源: [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

## NumPagination.js - 主页添加数字分页条

> 来源: [Github](https://github.com/liyifanniubi/liyifanniubi.github.io)

# 插入图片优化小细节
Github在issues插入的图片也会自动转换为github的地址.
为了文章的多样性, 在Gmeek的 `v2.19` 版本中添加了支持 html 标签的功能.
示例代码:
```html
`Gmeek-html<img src="https://img.jpg" style="text-align: center;">`
```
实际展示:

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/Qme1BvwvqLcS86jQqwfxVEFrdNPusCqRn3APhdHGEKLtDb" style="text-align: center;">`
