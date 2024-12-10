function loadResource(type, attributes) {
	if (type === 'style') {
		const style = document.createElement('style');
		style.textContent = attributes.css;
		document.head.appendChild(style);
	}
}

function createTOC() {
	const tocElement = document.createElement('div');
	tocElement.className = 'toc';
	document.body.appendChild(tocElement); // 将目录 <div> 插入到 <body> 中

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
			e.preventDefault();
			document.getElementById(heading.id).scrollIntoView({ behavior: 'smooth' });
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

document.addEventListener("DOMContentLoaded", function() {
	createTOC();

	// 添加 CSS 样式
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
		}
	`;

	loadResource('style', { css });

	const tocIcon = document.querySelector('.ArticleTOC');
	if (tocIcon) {
		tocIcon.onclick = (e) => {
			e.stopPropagation();
			toggleTOC();
		};
	}

	document.addEventListener('click', (e) => {
		const tocElement = document.querySelector('.toc');
		if (tocElement && tocElement.classList.contains('show') && !tocElement.contains(e.target) && !e.target.classList.contains('toc-icon')) {
			toggleTOC();
		}
	});

	// 创建ToTop按钮
	const btn = document.createElement('button');
	btn.className = 'back-to-top';
	btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
	document.body.appendChild(btn);

	// 点击事件处理
	btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

	// 滚动事件处理
	const toggleButtonVisibility = () => {
		btn.classList.toggle('show', window.pageYOffset > 300);
	};
	window.addEventListener('scroll', toggleButtonVisibility);
	window.addEventListener('resize', toggleButtonVisibility);
	toggleButtonVisibility(); // 初始化按钮显示

	// 高亮目录项
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
	document.addEventListener('scroll', highlightTOC);
});