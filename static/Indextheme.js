// 此脚本用于直接检测不同博客页面修改css
document.addEventListener('DOMContentLoaded', function() {
	// 定义应用样式的函数
	function applyStyles(styles) {
		let style = document.createElement("style");
		style.innerHTML = styles;
		document.head.appendChild(style);
	}

	// 通用样式
	applyStyles(`
		/*:root{
			--bgColor-default: rgb(255, 255, 255, 0.93);
			--color-canvas-default: rgb(255, 255, 255, 0.93);
		}*/
		html {background: url('https://ipfs.decentralized-content.com/ipfs/QmQn8HcHeutmaH2qEbPK8PT6TXEpj58VizavBxanCiQcYv') center / cover no-repeat fixed;}
		body {
			max-width:1000px;
			border-radius: 10px;
			box-shadow: 0 0 100px #0000001c;
		}
	`);
	// 获取所有 meta 标签并查找 `og:type`
	const metaTags = document.getElementsByTagName("meta");
	let ogTypeContent = null;

	for (let meta of metaTags) {
		if (meta.getAttribute("property") === "og:type") {
			ogTypeContent = meta.getAttribute("content");
			console.log("[Indextheme] 找到的 ogTypeContent 值为: " + ogTypeContent);
			break;
		}
	}

	// 根据 `og:type` 的内容应用不同的样式
	if (ogTypeContent === "blog") {
		applyStyles(`
			/* 主页-header样式 */
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
			/* 主页-文章列表样式 */
			.SideNav.border{
				border-radius: 10px;
				min-width: unset;
			}
			.SideNav-item:last-child{box-shadow: unset;}
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
		console.log("[Indextheme] 未找到特定页面");
		console.log("[Indextheme] 当前 ogTypeContent 值是: " + ogTypeContent);
	}
})