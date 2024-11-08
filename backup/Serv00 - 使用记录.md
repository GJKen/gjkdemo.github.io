# 注册serv00
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

这里可以用自己的域名或者用serv00的域名.
serv00的域名一般是`USERNAME.serv00.net`, 这个域名账号创建好之后默认就有, 可以删除后再手动创建, 再按照下图创建网站.

这里我写的是自己的域名, 后续可以通过自定义域名访问.

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

Serv00本身提供的网站托管在 `~/domains` 路径下, 所以我建议把Alist也部署到这个路径下的子目录.

一键创建目录并下载 Alist, 增加执行权限, 复制到终端粘贴使用

```bash
mkdir -p ~/domains/alist && cd ~/domains/alist && curl -L -o alist.tar.gz https://github.com/AlistGo/alist/releases/download/beta/alist-freebsd-amd64.tar.gz && tar -xzf alist.tar.gz && chomd +x alist
```

### 第一次启动Alist生成配置文件
然后需要先启动一次 Alist 让它生成配置文件，此次启动一定会失败，请不用在意：

```bash
./alist server
```

### 创建Alist所需数据库
回到 Panel 面板，找到 MySQL 选项卡，使用 Add database 功能新建一个数据库：

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/Qmd1bF66pa9RihfeYZ6odBBG9htemSi57jy2A32Q4wDt7r">`

Database name 和 Username 字段为了方便好记就写 Alist 就行了.

> 密码要求含有大写字母, 小写字母和数字三种字符, 且长度必须超过6个字符.

### 修改配置文件
进入 Panel 面板, 找到 File manager 选项卡, 会如下图的进入文件管理器

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmXmXQRv5AfHqy2sRYS4dNCPQL2xPiGfaGtgTJjwGsX5Et">`

我们需要双击编辑这个`config.json`文件.

我主要修改了`CDN` `database` `scheme`三个部分，其中 CDN 可以在 [Alist](https://alist.nn.ci/zh/config/configuration.html#cdn) 的官方文档找到，请选择你本地网络连接速度最快的一个。
