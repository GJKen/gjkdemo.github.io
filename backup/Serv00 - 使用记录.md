# 注册 Serv00

注册没什么好说的, gmail+干净一点的ip基本上都可以成功, 这里不多做展开.
收不到邮件信息的估计是邮箱问题. 比如:https://mail.proton.me

# 准备工作

进入 Additional services 选项卡中找到 Run your own applications 项目,
如下图所示, 必须要设置成如图所示的 Enabled.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmUg8VV61q7DApUWcijdA1xdZar5wE5TUhcfMq5femCMYs">`

如果不开启这一项, 自己的用户目录下的所有文件都无法添加可执行权限.

# 部署记录

## Alist

### 创建端口

每个账户只能创建3个端口.
其中一个用来反代本地搭建 Alist 的端口, 这里我用 26666 端口.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmNSXAsz4QFnkTp3JRHGLuUJStNoPaK7yERRqPj9spXSc9">`

### 创建网站

> Serv00 账号创建好之后默认就有一个网站, 一般是`USERNAME.serv00.net`, 可以随意删除.

这里可以用自己的域名或者用 Serv00 的域名.
下图我写的是自己的域名, 后续可以通过自定义域名访问.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmX3mkbrv5EfzsCzJXTTGqKdYDiXc2eu5BJMuK7ozD3PNC">`

其中26666这个端口是 alist 服务的端口.

### 网站添加 SSL 证书

站点创建完成后, 点击上方的 Manage SSL certificates

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmWRkpfidsY2KGkX47dAW4tKmNe2hStW6vzodRe7GUG2dw">`

点击 Manage

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmcXdLQSy2PJpuWMCVzMZebNFpdt2w3P6Px1wQ84Pi9jbx">`

点击 Add certificate

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/Qmd9CV8BxtjSMZivZnCQrVd1dqByaj6HoUWKi8UMrC8ZX6">`

### 安装 Alist

> [!TIP]
> Alist 官方在 24年8月17日, 增加了 [beta](https://github.com/AlistGo/alist/releases/tag/beta) 版本, 支持 FreeBSD 系统下能够运行的 Alist 可执行文件🎉

Serv00 本身提供的网站托管在 `~/domains` 路径下, 所以我建议把 Alist 也部署到这个路径下的子目录.

复制到终端粘贴使用:

> 一键创建目录并下载 Alist, 增加执行权限.

```bash
mkdir -p ~/domains/alist && cd ~/domains/alist && curl -L -o alist.tar.gz https://github.com/AlistGo/alist/releases/download/beta/alist-freebsd-amd64.tar.gz && tar -xzf alist.tar.gz && chomd +x alist
```

### 第一次启动 Alist 生成配置文件

然后需要先启动一次 Alist 让它生成配置文件, 此次启动一定会失败, 请不用在意：

```bash
./alist server
```

### 创建 Alist 所需数据库

回到 Panel 面板, 找到 MySQL 选项卡, 使用 Add database 功能新建一个数据库：

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/Qmd1bF66pa9RihfeYZ6odBBG9htemSi57jy2A32Q4wDt7r">`

Database name 和 Username 字段为了方便好记就写 Alist 就行了.

> 密码要求含有大写字母, 小写字母和数字三种字符, 且长度必须超过6个字符.

### 修改配置文件

进入 Panel 面板, 找到 File manager 选项卡, 会如下图的进入文件管理器.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmXmXQRv5AfHqy2sRYS4dNCPQL2xPiGfaGtgTJjwGsX5Et">`

双击编辑这个`config.json`文件.

我主要修改了`CDN` `database` `scheme`三个部分,

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmXLJa8YMr9KufMYVNQjVW1wXCjWmJ3Q9V1PqR5BRXHtHU">`

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

改完之后, 点击 save 保存.

### 再次启动Alist

回到SSH窗口中进行操作.

```bash
./alist server
```

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmYL72sd2Wyb5C6WrJe6G7w1NvAdpqXiUwFWUEm6FCSGxt">`

运行正常, 显示的管理员账号的密码一定要记住. 接着使用 Ctrl+c 停止运行.

### 自定义域名

我这边使用 Cloudflare 和 us.kg 的免费域名进行绑定.

> 因为 serv00 的域名基本上都会被墙, 没办法只能用~~cf减速器~~跨墙了.

我们进入 https://dash.cloudflare.com
点击添加域.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmcFYHqU8iTz77vEzVUkrHkMiQUcJ1mCjBz2u6q9mszmaD">`

输入自己的域名.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmWEwsF7kjqWYZET8AbyPbVizciT3pLDbi6Pjm4xkYZvCS">`

选择 free 计划.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmeYbZ48awUqAPApdLrRckVqbtLB71XWTpCafpHCwE2hHG">`

复制 dns 名称服务器.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmakCvRG52FLk2NV1XFjmWmz5LZuhPg3oD2SdiTunQH8TU">`

然后转到你的域名提供服务商, 添加 dns 记录.

`Gmeek-imgbox<img src="https://ipfs.mbzj.org/ipfs/QmUN7NYdHmRnLgHEGtFdHF3ygCtkVsR6WyRyhsX9nhDB1a">`

如果没问题就可以通过自定义域名访问了.

### Alist 保活

Serv00 会不定时杀进程.

我在 alist 目录下创建了`runAlist.sh`脚本, 内容如下:

```
screen -ls | awk 'NR>=2&&NR<=20{print $1}' | awk '{print "screen -S "$1" -X quit"}' | sh
echo "Attempting to start screen session 'alist'"
screen -dmS alist bash -c 'cd ~/domains/alist && ./alist server'
#screen -ls
echo "$(date '+%Y-%m-%d %H:%M:%S')" > ~/domains/alist/logfile.txt
```

转到 panel 面板, 创建 Cron Jobs 定时任务

我们需要创建2条定时任务, 一个是每小时执行, 一个是 reboot 执行, 如下图:

https://ipfs.mbzj.org/ipfs/QmRgagQ4tvQ6BeD5Hcjm2tx7YdWFL6Fo3BYCiHZJD9wgSd.jpg

计划任务执行我的`runAlist.sh`脚本进行进程保活.

成功后不出意外的话, 隔一段时间进入 Alist 网盘需要重新登陆账号, 因为定时脚本会先杀原来的 Alist 进程再重启.

# Serv00+CT8 保活

> 引用自 [Linux.do](https://linux.do/t/topic/180293)

## 首先上代码:

<details><summary>Worker 代码</summary>
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

addEventListener('scheduled', event => {
  event.waitUntil(handleScheduled(event.scheduledTime))
})

async function handleRequest(request) {
  return new Response('Worker is running')
}

async function handleScheduled(scheduledTime) {
  const accounts = JSON.parse(ACCOUNTS_JSON)
  const results = await loginAccounts(accounts)
  await sendSummary(results)
}

async function loginAccounts(accounts) {
  const results = []
  for (const account of accounts) {
    const result = await loginAccount(account)
    results.push({ ...account, ...result })
    await delay(Math.floor(Math.random() * 8000) + 1000)
  }
  return results
}

function generateRandomUserAgent() {
  const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const version = Math.floor(Math.random() * 100) + 1;
  const os = ['Windows NT 10.0', 'Macintosh', 'X11'];
  const selectedOS = os[Math.floor(Math.random() * os.length)];
  const osVersion = selectedOS === 'X11' ? 'Linux x86_64' : selectedOS === 'Macintosh' ? 'Intel Mac OS X 10_15_7' : 'Win64; x64';

  return `Mozilla/5.0 (${selectedOS}; ${osVersion}) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}/${version}.0.0.0 Safari/537.36`;
}

async function loginAccount(account) {
  const { username, password, panelnum, type } = account
  let url = type === 'ct8' 
    ? 'https://panel.ct8.pl/login/?next=/' 
    : `https://panel${panelnum}.serv00.com/login/?next=/`

  const userAgent = generateRandomUserAgent();

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': userAgent,
      },
    })

    const pageContent = await response.text()
    const csrfMatch = pageContent.match(/name="csrfmiddlewaretoken" value="([^"]*)"/)
    const csrfToken = csrfMatch ? csrfMatch[1] : null

    if (!csrfToken) {
      throw new Error('CSRF token not found')
    }

    const initialCookies = response.headers.get('set-cookie') || ''

    const formData = new URLSearchParams({
      'username': username,
      'password': password,
      'csrfmiddlewaretoken': csrfToken,
      'next': '/'
    })

    const loginResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': url,
        'User-Agent': userAgent,
        'Cookie': initialCookies,
      },
      body: formData.toString(),
      redirect: 'manual'
    })

    console.log(`Login response status: ${loginResponse.status}`)
    console.log(`Login response headers: ${JSON.stringify(Object.fromEntries(loginResponse.headers))}`)

    const loginResponseBody = await loginResponse.text()
    console.log(`Login response body: ${loginResponseBody.substring(0, 200)}...`)

    if (loginResponse.status === 302 && loginResponse.headers.get('location') === '/') {
      const loginCookies = loginResponse.headers.get('set-cookie') || ''
      const allCookies = combineCookies(initialCookies, loginCookies)

      const dashboardResponse = await fetch(url.replace('/login/', '/'), {
        headers: {
          'Cookie': allCookies,
          'User-Agent': userAgent,
        }
      })
      const dashboardContent = await dashboardResponse.text()
      console.log(`Dashboard content: ${dashboardContent.substring(0, 200)}...`)

      if (dashboardContent.includes('href="/logout/"') || dashboardContent.includes('href="/wyloguj/"')) {
        const nowUtc = formatToISO(new Date())
        const nowBeijing = formatToISO(new Date(Date.now() + 8 * 60 * 60 * 1000))
        const message = `账号 ${username} (${type}) 于北京时间 ${nowBeijing}（UTC时间 ${nowUtc}）登录成功！`
        console.log(message)
        await sendTelegramMessage(message)
        return { success: true, message }
      } else {
        const message = `账号 ${username} (${type}) 登录后未找到登出链接，可能登录失败。`
        console.error(message)
        await sendTelegramMessage(message)
        return { success: false, message }
      }
    } else if (loginResponseBody.includes('Nieprawidłowy login lub hasło')) {
      const message = `账号 ${username} (${type}) 登录失败：用户名或密码错误。`
      console.error(message)
      await sendTelegramMessage(message)
      return { success: false, message }
    } else {
      const message = `账号 ${username} (${type}) 登录失败，未知原因。请检查账号和密码是否正确。`
      console.error(message)
      await sendTelegramMessage(message)
      return { success: false, message }
    }
  } catch (error) {
    const message = `账号 ${username} (${type}) 登录时出现错误: ${error.message}`
    console.error(message)
    await sendTelegramMessage(message)
    return { success: false, message }
  }
}

function combineCookies(cookies1, cookies2) {
  const cookieMap = new Map()
  
  const parseCookies = (cookieString) => {
    cookieString.split(',').forEach(cookie => {
      const [fullCookie] = cookie.trim().split(';')
      const [name, value] = fullCookie.split('=')
      if (name && value) {
        cookieMap.set(name.trim(), value.trim())
      }
    })
  }

  parseCookies(cookies1)
  parseCookies(cookies2)

  return Array.from(cookieMap.entries()).map(([name, value]) => `${name}=${value}`).join('; ')
}

async function sendSummary(results) {
  const successfulLogins = results.filter(r => r.success)
  const failedLogins = results.filter(r => !r.success)

  let summaryMessage = '登录结果统计：\n'
  summaryMessage += `成功登录的账号：${successfulLogins.length}\n`
  summaryMessage += `登录失败的账号：${failedLogins.length}\n`

  if (failedLogins.length > 0) {
    summaryMessage += '\n登录失败的账号列表：\n'
    failedLogins.forEach(({ username, type, message }) => {
      summaryMessage += `- ${username} (${type}): ${message}\n`
    })
  }

  console.log(summaryMessage)
  await sendTelegramMessage(summaryMessage)
}

async function sendTelegramMessage(message) {
  const telegramConfig = JSON.parse(TELEGRAM_JSON)
  const { telegramBotToken, telegramBotUserId } = telegramConfig
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`
  
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: telegramBotUserId,
        text: message
      })
    })
  } catch (error) {
    console.error('Error sending Telegram message:', error)
  }
}

function formatToISO(date) {
  return date.toISOString().replace('T', ' ').replace('Z', '').replace(/\.\d{3}Z/, '')
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
</details>

## 变量

<details><summary>ACCOUNTS_JSON</summary>

[  
  { "username": "serv00user1", "password": "serv00password1", "panelnum": "0", "type": "serv00" },
  { "username": "serv00user2", "password": "serv00password2", "panelnum": "4", "type": "serv00" },
  { "username": "serv00user3", "password": "serv00password3", "panelnum": "7", "type": "serv00" },
  { "username": "ct8user1", "password": "ct8password1", "type": "ct8" },
  { "username": "ct8user2", "password": "ct8password2", "type": "ct8" }
]

</details>


<details><summary>TELEGRAM_JSON</summary>

{
  "telegramBotToken": "YOUR_BOT_TOKEN",
  "telegramBotUserId": "YOUR_USER_ID"
}

</details>

## 创建 Workers

进入 Cloudflare 面板.

https://ipfs.mbzj.org/ipfs/QmcitGGj9orfCTT51PeYLeEoeMZtesYnYhay6o5epd3o9L.jpg

点击创建.

https://ipfs.mbzj.org/ipfs/QmauoUSohYVxxcNUGrLKBNBuweaUW2PWNjtMR6KMCZmdgB.jpg

名字随意, 建议写`Serv00Keep`, 然后直接点部署.

https://ipfs.mbzj.org/ipfs/QmNP8RrwuUE6LEauh1tEAVApPXkLzf1nH28r6mWZgV5GEg.jpg

点击编辑代码.

https://ipfs.mbzj.org/ipfs/QmNVaEi6uUU7AaprzNaPGGwRbKNmc1kHvXEAE6pZTPZzqa.jpg