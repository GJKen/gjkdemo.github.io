let currentUrl = window.location.pathname;
    // 应用主页主题样式
    let style = document.createElement("style");
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
}