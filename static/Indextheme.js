// 定义应用样式的函数
function applyStyles(styles) {
    let style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
}

// 获取所有 meta 标签并查找 `og:type`, 找到后直接退出循环
const metaTags = document.getElementsByTagName("meta");
let ogTypeContent = null;
for (let meta of metaTags) {
    if (meta.getAttribute("property") === "og:type") {
        ogTypeContent = meta.getAttribute("content");
		console.log("[Indextheme]这里是循环判断,当前ogTypeContent值是::" + ogTypeContent)
        break;
    }
}

// 通用样式
applyStyles(`
	html {
		background: url('https://ipfs.decentralized-content.com/ipfs/QmQn8HcHeutmaH2qEbPK8PT6TXEpj58VizavBxanCiQcYv') no-repeat center center fixed;
		background-size: cover;
	}
`);

// 根据 `og:type` 的内容应用不同的样式
if (ogTypeContent === "blog") {
    applyStyles(`
        #header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding: 15px 0;
        }
        #header h1{
            display: flex;
            flex-direction: column;
            align-items: center;
			gap: 15px;
        }
        #header h1 a{
			margin:unset;
        }
		.title-right{
			margin:unset;
			
		}
		.avatar:hover {
			transform: scale(1.5) rotate(720deg);
			box-shadow: 0 0 10px rgb(45 250 255 / 74%);
		}
    `);
} else if (ogTypeContent === "article") {
    applyStyles(`
        #header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 30px;
            padding: 25px 10px;
        }
    `);
} else {
	console.log("[Indextheme]未找到特定页面")
	console.log("[Indextheme]当前ogTypeContent值是::" + ogTypeContent)
}