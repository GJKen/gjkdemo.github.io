# 注册Serv00
注册没什么好说的, gmail+干净一点的ip基本上都可以成功, 这里不多做展开.
收不到邮件信息的估计是邮箱问题.比如 https://mail.proton.me

# 准备工作
进入 Additional services 选项卡中找到 Run your own applications 项目,
如下图所示, 必须要设置成如图所示的 Enabled.

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmUg8VV61q7DApUWcijdA1xdZar5wE5TUhcfMq5femCMYs">`

如果不开启这一项, 自己的用户目录下的所有文件都无法添加可执行权限.

# 部署记录
## Alist
### 创建端口

每个账户只能创建3个端口.
其中一个用来反代本地搭建 Alist 的端口, 这里我用26666

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmNSXAsz4QFnkTp3JRHGLuUJStNoPaK7yERRqPj9spXSc9">`

### 创建网站

> Serv00 账号创建好之后默认就有一个网站, 一般是`USERNAME.serv00.net`, 可以随意删除.

这里可以用自己的域名或者用 Serv00 的域名.
下图我写的是自己的域名, 后续可以通过自定义域名访问.

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmX3mkbrv5EfzsCzJXTTGqKdYDiXc2eu5BJMuK7ozD3PNC">`

其中26666这个端口是 alist 服务的端口.

### 网站添加SSL证书
站点创建完成后, 点击上方的 Manage SSL certificates

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmWRkpfidsY2KGkX47dAW4tKmNe2hStW6vzodRe7GUG2dw">`

点击 Manage

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmcXdLQSy2PJpuWMCVzMZebNFpdt2w3P6Px1wQ84Pi9jbx">`

点击 Add certificate

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/Qmd9CV8BxtjSMZivZnCQrVd1dqByaj6HoUWKi8UMrC8ZX6">`

### 安装Alist
> [!TIP]
> Alist 官方在 24年8月17日, 增加了 [beta](https://github.com/AlistGo/alist/releases/tag/beta) 版本, 支持 FreeBSD 系统下能够运行的 Alist 可执行文件🎉

Serv00 本身提供的网站托管在 `~/domains` 路径下, 所以我建议把 Alist 也部署到这个路径下的子目录.

复制到终端粘贴使用:
> 一键创建目录并下载 Alist, 增加执行权限

```bash
mkdir -p ~/domains/alist && cd ~/domains/alist && curl -L -o alist.tar.gz https://github.com/AlistGo/alist/releases/download/beta/alist-freebsd-amd64.tar.gz && tar -xzf alist.tar.gz && chomd +x alist
```

### 第一次启动Alist生成配置文件
然后需要先启动一次 Alist 让它生成配置文件, 此次启动一定会失败, 请不用在意：

```bash
./alist server
```

### 创建Alist所需数据库
回到 Panel 面板, 找到 MySQL 选项卡, 使用 Add database 功能新建一个数据库：

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/Qmd1bF66pa9RihfeYZ6odBBG9htemSi57jy2A32Q4wDt7r">`

Database name 和 Username 字段为了方便好记就写 Alist 就行了.

> 密码要求含有大写字母, 小写字母和数字三种字符, 且长度必须超过6个字符.

### 修改配置文件
进入 Panel 面板, 找到 File manager 选项卡, 会如下图的进入文件管理器

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmXmXQRv5AfHqy2sRYS4dNCPQL2xPiGfaGtgTJjwGsX5Et">`

双击编辑这个`config.json`文件.

我主要修改了`CDN` `database` `scheme`三个部分,

`Gmeek-html<img src="https://cdn.img2ipfs.com/ipfs/QmXLJa8YMr9KufMYVNQjVW1wXCjWmJ3Q9V1PqR5BRXHtHU">`
<table>
  <tr>
    <td><p>CDN</p></td>
    <td colspan="2">
      <p><span>可以在 <a href="https://alist.nn.ci/zh/config/configuration.html#cdn">Alist</a> 的官方文档找到, 请选择你本地网络连接速度最快的一个.</span></p>
    </td>
  </tr>
  <tr>
    <td rowspan="6">database</td>
    <td>type</td>
    <td>因为我们创建的数据库类型是 mysql, 所以这里写<code class="notranslate">mysql</code>.</td>
  </tr>
  <tr>
    <td>host</td>
    <td>例如我的 serv00 是12, 就写<code class="notranslate">mysql12.serv00.com</code>, 自己看着写.</td>
  </tr>
  <tr>
    <td>port</td>
    <td>mysql 端口, 默认<code class="notranslate">3306</code>.</td>
  </tr>
  <tr>
    <td>user</td>
    <td>填写创建的数据库用户名</td>
  </tr>
  <tr>
    <td>passdowd</td>
    <td>填写创建的数据密码</td>
  </tr>
  <tr>
    <td>name</td>
    <td>填写创建的数据表名称</td>
  </tr>
  <tr>
    <td rowspan="2">database</td>
    <td>scheme</td>
    <td>0.0.0.0</td>
  </tr>
  <tr>
    <td>http_port</td>
    <td>填写创建的端口</td>
  </tr>
</table>

改完之后, 点击save保存

### 再次启动Alist
回到SSH窗口中进行操作.

```bash
./alist server
```

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmYL72sd2Wyb5C6WrJe6G7w1NvAdpqXiUwFWUEm6FCSGxt">`

运行正常, 记得把管理员用户的密码记住.接着使用Ctrl+c停止运行.

### 使用 Cloudflare 和域名绑定

> 因为 serv00 的域名基本上都会被墙, 没办法只能用~~cf减速器~~跨墙了

我们进入 https://dash.cloudflare.com
点击添加域

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmcFYHqU8iTz77vEzVUkrHkMiQUcJ1mCjBz2u6q9mszmaD">`

输入自己的域名

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmWEwsF7kjqWYZET8AbyPbVizciT3pLDbi6Pjm4xkYZvCS">`

选择 free 计划

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmeYbZ48awUqAPApdLrRckVqbtLB71XWTpCafpHCwE2hHG">`

复制 dns 名称服务器

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmakCvRG52FLk2NV1XFjmWmz5LZuhPg3oD2SdiTunQH8TU">`

然后转到你的域名提供服务商, 添加dns记录
`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmUN7NYdHmRnLgHEGtFdHF3ygCtkVsR6WyRyhsX9nhDB1a">`

如果没问题就可以通过自定义域名访问了

### Alist 保活

11

### 收尾工作

Serv00会不定时杀进程, 我们需要

Serv00会不定时杀进程, 所以我们把pm2添加开机自启, 可以保证每次重启都能由pm2调动Alist和Cloudflared.而且Serv00每三个月内必须要有一次登录面板或者SSH连接, 不然会删号, 也可以通过一个脚本解决问题, 接下来我会详细说明.