// 大部分css直接改写于primer.css, 而此脚本用于修改基本css
document.addEventListener('DOMContentLoaded', function() {
	// 定义应用样式的函数
	function applyStyles(styles) {
		let style = document.createElement("style");
		style.innerHTML = styles;
		document.head.appendChild(style);
	}

	// 通用样式
	applyStyles(`
		html {background: url('https://s2.loli.net/2024/11/14/DhKIbTFEa73Gsv8.webp') center / cover no-repeat fixed;}
		body {
			max-width:1000px;
		}
	`);
})