# 注册serv00
注册没什么好说的, gmail+干净一点的ip基本上都可以成功, 这里不多做展开.

# 准备工作
进入 Additional services 选项卡中找到 Run your own applications 项目,
如下图所示, 必须要设置成如图所示的 Enabled.
如果不开启这一项, 自己的用户目录下的所有文件都无法添加可执行权限.

![](https://ipfs.mbzj.org/ipfs/QmUK7ZjrgJoNmiqY5AVmZDvyqWpJ1AFZe8NBbhKENr6Mq4)

# 部署记录
## Alist
Alist 官方在 24年8月17日, 增加了 [beta](https://github.com/AlistGo/alist/releases/tag/beta) 版本, 支持 FreeBSD 系统下能够运行的 Alist 可执行文件🎉

### 创建端口

每个账户只能创建3个端口
其中一个用来反代本地搭建 Alist 的端口

![](https://ipfs.mbzj.org/ipfs/QmNSXAsz4QFnkTp3JRHGLuUJStNoPaK7yERRqPj9spXSc9.jpg)

### 创建网站

这里可以用自己的域名或者用serv00的域名.
serv00的域名一般是`USERNAME.serv00.net`, 这个域名账号创建好之后默认就有, 可以删除后再手动创建, 再按照下图创建网站.

这里我写的是自己的域名, 后续可以通过自定义域名访问.

![](https://ipfs.mbzj.org/ipfs/QmetkYuCRLDcUEGo2SGBs3YFqbDDGbr84SnViiqbrBeyMS)

> 其中26666这个端口是alist`config.json`里需要填写的端口, 后续会说到

### 网站添加SSL证书
站点创建完成后, 点击上方的 Manage SSL certificates

![](https://ipfs.mbzj.org/ipfs/QmWRkpfidsY2KGkX47dAW4tKmNe2hStW6vzodRe7GUG2dw)

点击 Manage

![](https://ipfs.mbzj.org/ipfs/QmcXdLQSy2PJpuWMCVzMZebNFpdt2w3P6Px1wQ84Pi9jbx)

点击 Add certificate
![](https://ipfs.mbzj.org/ipfs/Qmd9CV8BxtjSMZivZnCQrVd1dqByaj6HoUWKi8UMrC8ZX6)

### 1