# jsDelivr 官网

> https://www.jsdelivr.com

# 先决条件

必须要创建一个 GitHub 仓库.

# 创建版本号

进入仓库点击 releases.

`Gmeek-html<img src="https://i0.img2ipfs.com/ipfs/QmU1czFFqTS8kx6nkc52dxxdJHw3ASpeGGHCYmUgRxcBxM">`

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmcPKqqhyTPZrsbvDW5KcibNfEFN55t6yecS71yAL8Nh7F">`

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmZEczMS98W1qbcHJXhn6NtVXkC9UwdjP417hFRpkCTphh">`

# 使用方法

例如:

`https://cdn.jsdelivr.net/gh/[GitHub用户名]/[仓库名]@[标签或分支]/[文件路径]`

https://cdn.jsdelivr.net/gh/gjken/gjken.github.io/static/primer.min.css

> [!Important]
> 如果源文件更新, cdn 加速后的链接不会更新那么快, 一般有12小时的延迟, 大概?

# 其它替代地址

由于 Jsdelivr 国内的 CDN 服务被 DNS 污染了, 被指向了Google, Twitter 和 Facebook 的 IP 地址, 导致使用 CDN 服务加速的链接访问失败.

```css
fastly.jsdelivr.net
gcore.jsdelivr.net
testingcf.jsdelivr.net
test1.jsdelivr.net
```

| Key | Value
| - | -
| [GitHub 用户名] | 写你的 GitHub 用户名.
| [仓库名]  | 写你的 GitHub 仓库名称.
| [标签或分支] | 例如 `https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js`<br>都不写默认访问最新版本.</br>
| [文件路径] | 写你的 GitHub 仓库文件路径.