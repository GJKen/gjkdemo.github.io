# 注册serv00
注册没什么好说的, gmail+干净一点的ip基本上都可以成功, 这里不多做展开.
收不到邮件信息的估计是邮箱问题.比如 https://mail.proton.me

# 准备工作
进入 Additional services 选项卡中找到 Run your own applications 项目,
如下图所示, 必须要设置成如图所示的 Enabled.

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmUg8VV61q7DApUWcijdA1xdZar5wE5TUhcfMq5femCMYs">`
![](https://ipfs.mbzj.org/ipfs/QmUg8VV61q7DApUWcijdA1xdZar5wE5TUhcfMq5femCMYs)

如果不开启这一项, 自己的用户目录下的所有文件都无法添加可执行权限.

# 部署记录
## Alist
### 创建端口

每个账户只能创建3个端口.
其中一个用来反代本地搭建 Alist 的端口, 这里我用26666

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmNSXAsz4QFnkTp3JRHGLuUJStNoPaK7yERRqPj9spXSc9">`
![](https://ipfs.mbzj.org/ipfs/QmNSXAsz4QFnkTp3JRHGLuUJStNoPaK7yERRqPj9spXSc9.jpg)

### 创建网站

这里可以用自己的域名或者用serv00的域名.
serv00的域名一般是`USERNAME.serv00.net`, 这个域名账号创建好之后默认就有, 可以删除后再手动创建, 再按照下图创建网站.

这里我写的是自己的域名, 后续可以通过自定义域名访问.

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmX3mkbrv5EfzsCzJXTTGqKdYDiXc2eu5BJMuK7ozD3PNC">`
![](https://ipfs.mbzj.org/ipfs/QmX3mkbrv5EfzsCzJXTTGqKdYDiXc2eu5BJMuK7ozD3PNC)

其中26666这个端口是 alist 服务的端口.

### 网站添加SSL证书
站点创建完成后, 点击上方的 Manage SSL certificates

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmWRkpfidsY2KGkX47dAW4tKmNe2hStW6vzodRe7GUG2dw">`
![](https://ipfs.mbzj.org/ipfs/QmWRkpfidsY2KGkX47dAW4tKmNe2hStW6vzodRe7GUG2dw)

点击 Manage

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/QmcXdLQSy2PJpuWMCVzMZebNFpdt2w3P6Px1wQ84Pi9jbx">`
![](https://ipfs.mbzj.org/ipfs/QmcXdLQSy2PJpuWMCVzMZebNFpdt2w3P6Px1wQ84Pi9jbx)

点击 Add certificate

`Gmeek-html<img src="https://ipfs.mbzj.org/ipfs/Qmd9CV8BxtjSMZivZnCQrVd1dqByaj6HoUWKi8UMrC8ZX6">`
![](https://ipfs.mbzj.org/ipfs/Qmd9CV8BxtjSMZivZnCQrVd1dqByaj6HoUWKi8UMrC8ZX6)

### 安装Alist
> [!TIP]
> Alist 官方在 24年8月17日, 增加了 [beta](https://github.com/AlistGo/alist/releases/tag/beta) 版本, 支持 FreeBSD 系统下能够运行的 Alist 可执行文件🎉

Serv00本身提供的网站托管在 `~/domains` 路径下, 所以我建议把Alist也部署到这个路径下的子目录.

下面的命令是创建`~/domain/alist`文件夹, 并切换到创建的目录同时下载 `alist-freebsd` 版本的文件, 解压缩后给alist二进制增加执行权限

```bash
mkdir -p ~/domain/alist && cd ~/domain/alist && curl -L -o alist.tar.gz https://github.com/AlistGo/alist/releases/download/beta/alist-freebsd-amd64.tar.gz && tar -xzf alist.tar.gz && chomd +x alist
```

