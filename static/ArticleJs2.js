//////////////// 文章目录代码块part1 start ////////////////

	//////////////// 插入css的函数 start ////////////////
function loadResource(type, attributes) {
	if (type === 'style') {
		const style = document.createElement('style');
		style.textContent = attributes.css;
		document.head.appendChild(style);
	}
}
	//////////////// 插入css的函数 end ////////////////

function createTOC() {
	const tocElement = document.createElement('div');
	tocElement.className = 'toc';
	document.body.appendChild(tocElement); // 将目录 <div> 插入到 <body> 中

	// 获取文章标题并设置排版
	const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6');
	headings.forEach(heading => {
		if (!heading.id) {
			heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
		}
		const link = document.createElement('a');
		link.href = `#${heading.id}`;
		link.textContent = heading.textContent;
		link.className = `toc-link toc-${heading.tagName.toLowerCase()}`;
		if (heading.tagName !== 'H1') {
			const level = parseInt(heading.tagName.charAt(1));
			link.style.marginLeft = `${(level - 1) * 10}px`;
		}
		link.addEventListener('click', function(e) {
		// 添加点击事件, 平滑滚动到对应的标题位置
			e.preventDefault();
			document.getElementById(heading.id).scrollIntoView();
		});
		tocElement.appendChild(link);
	});
}

function toggleTOC() {
	const tocElement = document.querySelector('.toc');
	const tocIcon = document.querySelector('.ArticleTOC');
	if (tocElement && tocIcon) {
		tocElement.classList.toggle('show');
		tocIcon.classList.toggle('active');
		tocIcon.style.boxShadow = tocIcon.classList.contains('active') ?
			'6px 6px 14px 0 var(--header-btn-shadowColor) inset, -7px -7px 12px 0 var(--header-btn-shadowColor2) inset' :
			'';
	}
}
//////////////// 文章目录代码块part1 end ////////////////
document.addEventListener('DOMContentLoaded', () => {
	// 页面加载时初始化 data-percent 为 0 或其他适当的值
	const percentBtn = document.querySelector('.percent-btn');
	if (percentBtn) {
		percentBtn.setAttribute('data-percent', '0'); // 设置初始百分比为 0
	}
	//////////////// 懒加载图片 start ////////////////
	const ob = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imgContainer = img.previousElementSibling;
				const handleError = (isError = false) => {
					if (imgContainer && imgContainer.classList.contains('ImgLazyLoad')) {
						imgContainer.style.display = 'none';
					}
					if (isError) {
						const errorContainer = document.createElement('div');
						errorContainer.classList.add('Imgerror-container');
						errorContainer.innerHTML =
`<svg xmlns="http://www.w3.org/2000/svg" style="height:60px;" class="Imgerror" viewBox="0 0 1024 1024"><path fill="#ff5b5b" d="M320 896h-77.833L515.92 622.253a21.333 21.333 0 0 0 3.16-26.133l-89.427-149.053 165.427-330.86A21.333 21.333 0 0 0 576 85.333H96a53.393 53.393 0 0 0-53.333 53.334v746.666A53.393 53.393 0 0 0 96 938.667h224A21.333 21.333 0 0 0 320 896zM96 128h445.48L386.253 438.46a21.333 21.333 0 0 0 .787 20.513L474 603.86l-69.333 69.333-89.62-89.653a53.333 53.333 0 0 0-75.427 0L85.333 737.827v-599.16A10.667 10.667 0 0 1 96 128zM85.333 885.333v-87.166l184.46-184.454a10.667 10.667 0 0 1 15.08 0l89.627 89.62L181.833 896H96a10.667 10.667 0 0 1-10.667-10.667zm192-458.666C336.147 426.667 384 378.813 384 320s-47.853-106.667-106.667-106.667S170.667 261.187 170.667 320s47.853 106.667 106.666 106.667zm0-170.667a64 64 0 1 1-64 64 64.073 64.073 0 0 1 64-64zM928 128H661.333a21.333 21.333 0 0 0-19.08 11.793l-.046.087c-.04.087-.087.173-.127.253L535.587 353.127a21.333 21.333 0 1 0 38.16 19.08l100.773-201.54H928a10.667 10.667 0 0 1 10.667 10.666V652.5L783.713 497.54a53.333 53.333 0 0 0-75.426 0L571.08 634.747a21.333 21.333 0 0 0-3.153 26.153l24.666 41.08-203.646 244.36a21.333 21.333 0 0 0 16.386 34.993H928A53.393 53.393 0 0 0 981.333 928V181.333A53.393 53.393 0 0 0 928 128zm0 810.667H450.88L635.053 717.66a21.333 21.333 0 0 0 1.907-24.667l-23.933-39.886L738.46 527.68a10.667 10.667 0 0 1 15.08 0l185.127 185.153V928A10.667 10.667 0 0 1 928 938.667z"/></svg><p class="Imgerror-message">图片错误</p>`;
						img.parentNode.insertBefore(errorContainer, img.nextSibling);
						img.style.display = 'none';
					} else {
						img.classList.remove('ImgLazyLoad');
						img.classList.add('ImgLoaded');
					}
				};

				img.src = img.getAttribute('img-src');
				ob.unobserve(img);

				img.onload = () => handleError(false);
				img.onerror = () => handleError(true);
			}
		});
	}, {
		rootMargin: '0px 0px 500px 0px',
	});

	document.querySelectorAll('[img-src]').forEach(img => ob.observe(img));
	//////////////// 懒加载图片 end ////////////////

	//////////////// 引入fancybox所需的css文件以及所需的绑定函数 end ////////////////
	document.head.appendChild(Object.assign(document.createElement('link'), {
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
	}));
	Fancybox.bind('[data-fancybox="gallery"]', {});
	//////////////// 引入fancybox所需的css文件以及所需的绑定函数 end ////////////////

	//////////////// 文章目录代码块 part2 start ////////////////
	createTOC();

	// 全局点击事件监听器
	document.addEventListener('click', (e) => {
		// 检查是否点击目录之外的地方, 如果是则隐藏目录列表
		const tocElement = document.querySelector('.toc');
		if (tocElement && tocElement.classList.contains('show') &&
			!tocElement.contains(e.target) &&
			!e.target.classList.contains('ArticleTOC')) {
			toggleTOC();
		}
	});
	
		//////////////// 添加 CSS 样式 start ////////////////
	const css = `
		:root {
			--toc-link-bgColor: #ffffffb8;
			--toc-h1-after-bgColor: #1b9dff
		}
		[data-color-mode=light][data-light-theme=dark],
		[data-color-mode=light][data-light-theme=dark]::selection,
		[data-color-mode=dark][data-dark-theme=dark],
		[data-color-mode=dark][data-dark-theme=dark]::selection {
			--toc-link-bgColor: #121d23ab;
			--toc-h1-after-bgColor: #43dbff
		}
		.toc {
			position: fixed;
			bottom: 13%;
			right: 0;
			transform: translateX(50%);
			width: 250px;
			max-height: 50vh;
			background-color: var(--toc-link-bgColor);
			border-radius: 10px;
			padding: 10px;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
			overflow-y: auto;
			z-index: 99;
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
			backdrop-filter: blur(15px);
		}
		/* 滚动条样式 */
		.toc::-webkit-scrollbar {
			width: 4px; 
		}
		.toc::-webkit-scrollbar-thumb {
			background: #9fc6e3;
			border-radius: 20px;
		}
		.toc::-webkit-scrollbar-thumb:hover {
			background: #6baedf;
		}
		/* 针对 Firefox */
		.toc {
			scrollbar-width: thin; /* 滚动条宽度：auto 或 thin */
			scrollbar-color: #9fc6e3 transparent; /* 滚动条颜色+轨道颜色(透明) */
		}
		.toc.show {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
		.toc a {
			display: block;
			color: var(--fgColor-default);
			text-decoration: none;
			padding: 6px;
			font-size: 14px;
			line-height: 1.5;
			border-radius: 8px;
			transition: background-color 0.2s ease;
		}
		.toc a:hover {
			background-color: #6be5ff99;
			transform:translate(1px,1px);
		}
		.toc-h1{
			position: relative;
			padding-left: 10px;
		}
		.toc-h1::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			width: 3px;
			height: 60%;
			background-color: var(--toc-h1-after-bgColor);
			transform: translateY(-50%);
		}
		@media (max-width: 768px) {
			.toc {
				width: 200px;
				max-height: 40vh;
			}
		}
	
		.back-to-top {
			position: fixed;
			bottom: 1%;
			right: 15px;
			background-color: rgba(255, 255, 255, 0.8);
			color: #333;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			width: 50px;
			height: 50px;
			font-size: 30px;
			z-index: 10000;
			transform: translateY(20px); /* 初始位置稍微偏下 */
			opacity: 0;
			visibility: hidden;
			transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s; /* 过渡效果 */
			align-items: center;
			justify-content: center;
		}
	
		.back-to-top.show {
			transform: translateY(0); /* 恢复正常位置 */
			opacity: 1;
			visibility: visible;
			transition: transform 0.3s ease, opacity 0.3s ease;
		}
	
		.back-to-top:hover {
		 transform: scale(1.1);
		}
		.back-to-top svg {
		 width: 24px;
		 height: 24px;
		}
		@media (max-width: 768px) {
		 .back-to-top {
			bottom: 2%;
			width: 40px;
			height: 40px;
			font-size: 20px;
		 }
		}
		.toc-link.toc-active {
			background-color: #3db9d399;
			font-weight: bold;
			box-shadow: inset -2px -2px 6px #ffffff42, inset 2px 2px 6px #00000080;
		}
	`;
	
	loadResource('style', { css });
		//////////////// 添加 CSS 样式 end ////////////////
	
	// 滚动切换高亮标题
	const highlightTOC = () => {
		const tocLinks = document.querySelectorAll('.toc-link');
		const fromTop = window.scrollY + 10;
		let currentHeading = null;
		tocLinks.forEach(link => {
			const section = document.getElementById(link.getAttribute('href').substring(1));
			if (section && section.offsetTop <= fromTop) {
				currentHeading = link;
			}
		});
	
		tocLinks.forEach(link => link.classList.remove('toc-active'));
		if (currentHeading) {
			currentHeading.classList.add('toc-active');
			currentHeading.scrollIntoView({ block: 'center', inline: 'nearest' });
		}
	};
	// 添加全局滚动监听
	document.addEventListener('scroll', highlightTOC);
	//////////////// 文章目录代码块 part2 end ////////////////

function percentageScrollFn(currentTop) {
    let docHeight = document.body.clientHeight; // 获取页面的总高度
    const winHeight = document.documentElement.clientHeight; // 获取视口高度
    const contentMath = docHeight > winHeight ? docHeight - winHeight : document.documentElement.scrollHeight - winHeight; // 计算内容高度
    const scrollPercent = currentTop / contentMath; // 计算滚动百分比
    const scrollPercentRounded = Math.round(scrollPercent * 100); // 四舍五入百分比
    const percentage = scrollPercentRounded > 100 ? 100 : scrollPercentRounded <= 0 ? 1 : scrollPercentRounded; // 限制百分比在 1 到 100 之间

    // 更新 data-percent 属性
    const percentBtn = document.querySelector('.percent-btn');
    percentBtn.setAttribute('data-percent', percentage); // 更新百分比值
}


	window.addEventListener('scroll', () => {
		const currentTop = document.documentElement.scrollTop || document.body.scrollTop;
		percentageScrollFn(currentTop); // 调用你的百分比滚动处理函数
	});


	//////////////// 文章跳转按钮 start ////////////////
	// // 创建ToTop按钮
	// const jumpButton = document.createElement('button');
	// jumpButton.className = 'back-to-top';
	// jumpButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
	// document.body.appendChild(jumpButton);
	
	// // 点击事件处理
	// jumpButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
	
	// // 滚动事件处理
	// const toggleButtonVisibility = () => {
	// 	jumpButton.classList.toggle('show', window.pageYOffset > 300);
	// };
	// window.addEventListener('scroll', toggleButtonVisibility);
	// window.addEventListener('resize', toggleButtonVisibility);
	// toggleButtonVisibility(); // 初始化按钮显示
	//////////////// 文章跳转按钮 end ////////////////
});