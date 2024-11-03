document.addEventListener('DOMContentLoaded', function() {
    let currentUrl = window.location.pathname;
    if (currentUrl.includes('/index.html') || currentUrl === "/") {
		console.log('')
        //应用主页主题------------------------------------------------------------------------------
        let style = document.createElement("style");
        style.innerHTML = `
			/* header样式*/
			#header {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20px;
				padding: 20px 0;
			}
			.title-right {
                width: 100%;
                text-align: center;
                justify-content: space-evenly;
            }
        `;
        document.head.appendChild(style);
    } else {
        console.log('未应用主题');
    }
})
