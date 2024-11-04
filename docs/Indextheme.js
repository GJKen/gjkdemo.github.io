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
