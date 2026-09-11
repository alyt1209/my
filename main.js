// 主 JavaScript 文件

document.addEventListener('DOMContentLoaded', function() {
    console.log('网站加载完成');
    initNavigation();
    initScrollEffect();
});

// 导航高亮
function initNavigation() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith(currentPage)) {
            link.classList.add('active');
        }
    });
}

// 滚动效果
function initScrollEffect() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// 平滑滚动
function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
