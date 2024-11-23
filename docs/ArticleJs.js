// 图片懒加载所需函数
const lazyImage = new LazyImage('.lazy-load-image');
// Customize the loading strategy
lazyImage.observeWithIntersectionObserver();
// Optional: Provide a placeholder image
lazyImage.placeholderImage = 'placeholder.jpg';
lazyImage.init();
document.addEventListener('DOMContentLoaded', () => {
	// 引入fancybox所需的css文件以及所需的绑定函数
	document.head.appendChild(Object.assign(document.createElement('link'), {
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
	}));
	Fancybox.bind('[data-fancybox="gallery"]', {});
});