GitHub Pagesde 的`github.io`域名访问太慢了, 故有此教程.

# 将自定义域名接入 Cloudflare

## 先决条件

假设你已经:

- [x] 拥有了一个域名.
- [x] 域名备案已解决.

## Cloudflare 添加域

我们进入 https://dash.cloudflare.com

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmcFYHqU8iTz77vEzVUkrHkMiQUcJ1mCjBz2u6q9mszmaD">`

输入自己的域名点击继续, 然后选择底部的 Free 计划

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmWEwsF7kjqWYZET8AbyPbVizciT3pLDbi6Pjm4xkYZvCS">`

复制 dns 名称服务器.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmakCvRG52FLk2NV1XFjmWmz5LZuhPg3oD2SdiTunQH8TU">`

然后转到你的域名提供服务商, 添加 dns 记录.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmUN7NYdHmRnLgHEGtFdHF3ygCtkVsR6WyRyhsX9nhDB1a">`

## 填写 DNS 记录.

回到 Cloudflare面板, 进入 dns 记录, 按照下图添加 `CNAME` 和 `A` 记录.

`Gmeek-imgbox<img src="https://cdn.img2ipfs.com/ipfs/QmUFcvcDv8g8Y9G3B81pfE9bSuLMwKrz5mpaa9d2Zn3W9Q?filename=image.png">`

```
185.199.108.153

185.199.109.153

185.199.110.153

185.199.111.153
```

<!--  注释块
# 进入 Github 的 Pages 设置自定义域名

![](https://ipfs.mbzj.org/ipfs/QmYfvg3jyxVCusmyicJVGQEyXhTfdVJTatotxVHRRqqE9K)

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmYfvg3jyxVCusmyicJVGQEyXhTfdVJTatotxVHRRqqE9K">`

填写 Save 之后会提示你等待一会

![](https://ipfs.mbzj.org/ipfs/QmYtbdp1WTLPgVdVXJvS5hJCwmUSqN3qCNX3tNjUiCmYv)

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmYtbdp1WTLPgVdVXJvS5hJCwmUSqN3qCNX3tNjUiCDmYv">`
-->

如果没问题就可以通过自定义域名访问了.
