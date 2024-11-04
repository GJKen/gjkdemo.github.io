<<<<<<< HEAD
let currentUrl = window.location.pathname;
console.log("输出当前路径:", currentUrl); // 输出当前路径

if (currentUrl.includes('/index.html') || currentUrl === "/") {
    console.log('应用主页主题'); // 当路径符合条件时输出

    // 应用主页主题样式
    let style = document.createElement("style");
    console.log('修改样式');
    style.innerHTML = `
        /* header样式 */
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
    console.log('已改样式');
} else {
    console.log('未应用主题'); // 当路径不符合条件时输出
}
=======
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
>>>>>>> 2c3ed9ecaac35297277b71448f645f55f9ecada4
