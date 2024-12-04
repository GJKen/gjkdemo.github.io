document.addEventListener('DOMContentLoaded', () => {
	const ob = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.getAttribute('img-src'); // 获取 img-src 属性的值
				img.classList.remove('ImgLazyLoad');
				ob.unobserve(img);
			}
		});
	}, {
		rootMargin: '0px 0px 500px 0px',
	});

	const imgs = document.querySelectorAll('[img-src]'); // 选择所有具有 img-src 属性的元素
	imgs.forEach(img => {
		ob.observe(img);
	});

	// 引入fancybox所需的css文件以及所需的绑定函数
	document.head.appendChild(Object.assign(document.createElement('link'), {
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
	}));
	Fancybox.bind('[data-fancybox="gallery"]', {});
});