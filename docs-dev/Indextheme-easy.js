// 定义应用样式的函数
function applyStyles(styles) {
    let style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
}

// 通用样式
applyStyles(`
	html {
		background: url('https://ipfs.decentralized-content.com/ipfs/QmQn8HcHeutmaH2qEbPK8PT6TXEpj58VizavBxanCiQcYv') no-repeat center center fixed;
		background-size: cover;
	}
`);