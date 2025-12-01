        // 图片数据
        const photoData = [
            { id: 1, src: "壁纸.png", title: "壁纸", date: "5", category: "nature" },
            { id: 2, src: "计算机.png", title: "计算机", date: "4", category: "city" },
            { id: 3, src: " 1.png  ", title: "森", date: "08", category: "nature" },
            { id: 4, src: "2.png  ", title: "城", date: "05", category: "city" },
            { id: 5, src: "3.png  ", title: "👿", date: "28", category: "travel" },
            { id: 6, src: "4.png   ", title: "😪", date: "25", category: "nature" },
            { id: 7, src: "5.png  ", title: "音", date: "20", category: "people" },
            { id: 8, src: " 6.png  ", title: "海滩", date: "15", category: "travel" },
            { id: 9, src: " 7.png ", title: "冲浪", date: "10", category: "people" },
            { id: 10, src: " 8.png  ", title: "湖泊", date: "05", category: "nature" },
            { id: 11, src: "9.png  ", title: "光", date: "28", category: "nature" },
            { id: 12, src: "  10.png ", title: "山雾", date: "25", category: "nature" },
            { id: 13, src: " 11.png  ", title: "巴道", date: "20", category: "city" },
            { id: 14, src: " 12.png ", title: "都景", date: "15", category: "city" },
            { id: 15, src: "  13.png ", title: "风光", date: "10", category: "nature" },
            { id: 16, src: " 14.png  ", title: "自观", date: "05", category: "nature" },
            { id: 17, src: " 15.png ", title: "秋林", date: "28", category: "nature" },
            { id: 18, src: "  16.png ", title: "雪巅", date: "20", category: "nature" },
            { id: 19, src: "  17.png ", title: "星夜", date: "15", category: "nature" },
            { id: 20, src: "  18.png ", title: "城夜", date: "10", category: "city" },
              { id: 11, src: "19.png  ", title: "光", date: "28", category: "nature" },
            { id: 12, src: "  20.png ", title: "山雾", date: "25", category: "nature" },
            { id: 13, src: " 21.png  ", title: "巴道", date: "20", category: "city" },
            { id: 14, src: " 22.png ", title: "都景", date: "15", category: "city" },
            { id: 15, src: "  23.png ", title: "风光", date: "10", category: "nature" },
            { id: 16, src: " 24.png  ", title: "自观", date: "05", category: "nature" },
            { id: 17, src: " 25.png ", title: "秋林", date: "28", category: "nature" },
            { id: 18, src: "  26.png ", title: "雪巅", date: "20", category: "nature" },
            { id: 19, src: "  27.png ", title: "星夜", date: "15", category: "nature" },
            { id: 20, src: "  28.png ", title: "城夜", date: "10", category: "city" },
                        { id: 19, src: "  29.png ", title: "星夜", date: "15", category: "nature" },
            { id: 20, src: "  30.png ", title: "城夜", date: "10", category: "city" },
                        { id: 17, src: " 31.png ", title: "秋林", date: "28", category: "nature" },
            { id: 18, src: "  32.png ", title: "雪巅", date: "20", category: "nature" },
            { id: 19, src: "  33.png ", title: "星夜", date: "15", category: "nature" },
            { id: 20, src: "  34.png ", title: "城夜", date: "10", category: "city" },
                        { id: 19, src: "  35.png ", title: "星夜", date: "15", category: "nature" },
            { id: 20, src: "  34.png ", title: "城夜", date: "10", category: "city" },
        ];

        // DOM元素
        const albumGrid = document.getElementById('albumGrid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const imageModal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const closeModal = document.getElementById('closeModal');
        const uploadBtn = document.getElementById('uploadBtn');
        
        // 当前筛选器
        let currentFilter = 'all';
        
        // 初始化相册
        function initAlbum() {
            renderPhotos(photoData);
            setupEventListeners();
        }
        
        // 渲染照片
        function renderPhotos(photos) {
        
            albumGrid.innerHTML = '';
            
            if (photos.length === 0) {
                albumGrid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-images"></i>
                        <h3>暂无照片</h3>
                        <p>点击"上传照片"按钮添加您的第一张照片</p>
                    </div>
                `;
                return;
            }
            
            photos.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.className = 'photo-card';
                photoCard.dataset.id = photo.id;
                photoCard.dataset.category = photo.category || 'all';
                
                photoCard.innerHTML = `
                    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                    <div class="photo-info">
                        <div class="photo-title">${photo.title}</div>
                        <div class="photo-date">
                            <i class="far fa-calendar"></i>
                            ${photo.date}
                        </div>
                    </div>
                `;
                // 虚拟滚动实现
class VirtualScroll {
    constructor(container, items, itemHeight, itemWidth, gap = 15) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.itemWidth = itemWidth;
        this.gap = gap;
        this.visibleItems = [];
        this.scrollTop = 0;
        this.containerHeight = 0;
        
        this.init();
    }
    
    init() {
        this.calculateDimensions();
        this.setupContainer();
        this.render();
        this.bindEvents();
    }
    
    calculateDimensions() {
        const containerWidth = this.container.clientWidth;
        this.itemsPerRow = Math.floor(containerWidth / (this.itemWidth + this.gap));
        this.totalRows = Math.ceil(this.items.length / this.itemsPerRow);
        this.containerHeight = this.totalRows * (this.itemHeight + this.gap);
    }
    
    setupContainer() {
        this.container.innerHTML = '';
        const content = document.createElement('div');
        content.className = 'virtual-scroll-content';
        content.style.height = `${this.containerHeight}px`;
        this.container.appendChild(content);
        this.content = content;
    }
    
    render() {
        const startRow = Math.floor(this.scrollTop / (this.itemHeight + this.gap));
        const visibleRows = Math.ceil(this.container.clientHeight / (this.itemHeight + this.gap)) + 2;
        
        // 移除不可见的项
        this.visibleItems.forEach(item => {
            if (item.row < startRow || item.row >= startRow + visibleRows) {
                item.element.remove();
            }
        });
        
        // 添加可见的项
        for (let row = startRow; row < startRow + visibleRows && row < this.totalRows; row++) {
            for (let col = 0; col < this.itemsPerRow; col++) {
                const index = row * this.itemsPerRow + col;
                if (index < this.items.length) {
                    this.createItem(this.items[index], row, col);
                }
            }
        }
    }
    
    createItem(itemData, row, col) {
        // 创建图片卡牌...
    }
    
    bindEvents() {
        this.container.addEventListener('scroll', () => {
            this.scrollTop = this.container.scrollTop;
            this.render();
        });
        
        window.addEventListener('resize', () => {
            this.calculateDimensions();
            this.setupContainer();
            this.render();
        });
    }
}
                albumGrid.appendChild(photoCard);
            });
        }
        
        // 设置事件监听器
        function setupEventListeners() {
            // 筛选按钮点击事件
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    
                    const filteredPhotos = currentFilter === 'all' 
                        ? photoData 
                        : photoData.filter(photo => photo.category === currentFilter);
                    // 添加Intersection Observer实现懒加载
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px',
    threshold: 0.1
});

// 修改renderPhotos函数中的img标签
photoCard.innerHTML = `
    <img data-src="${photo.src}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231a1a1a'/%3E%3C/svg%3E" alt="${photo.title}" loading="lazy">
    <div class="photo-info">
        <div class="photo-title">${photo.title}</div>
        <div class="photo-date">
            <i class="far fa-calendar"></i>
            ${photo.date}
        </div>
    </div>
`;

// 在照片卡牌添加到DOM后
setTimeout(() => {
    const lazyImages = photoCard.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}, 0);
                    renderPhotos(filteredPhotos);
                });
            });
            
            // 图片卡片点击事件（委托）
            albumGrid.addEventListener('click', (e) => {
                const photoCard = e.target.closest('.photo-card');
                if (photoCard) {
                    const photoId = parseInt(photoCard.dataset.id);
                    const photo = photoData.find(p => p.id === photoId);
                    
                    if (photo) {
                        openModal(photo);
                    }
                }
            });
            
            // 关闭模态框
            closeModal.addEventListener('click', () => {
                imageModal.classList.remove('active');
            });
            
            // 点击模态框背景关闭
            imageModal.addEventListener('click', (e) => {
                if (e.target === imageModal) {
                    imageModal.classList.remove('active');
                }
            });
            
            // 上传按钮点击事件
            if (uploadBtn) {
                uploadBtn.addEventListener('click', () => {
                    alert('上传功能模拟 - 在实际应用中，这里会打开文件选择器');
                });
            }
            
            // 选择按钮点击事件
            const selectBtn = document.getElementById('selectBtn');
            if (selectBtn) {
                selectBtn.addEventListener('click', () => {
                    alert('选择模式已激活 - 点击图片进行选择');
                });
            }
            
            // 排序按钮点击事件
            const sortBtn = document.getElementById('sortBtn');
            if (sortBtn) {
                sortBtn.addEventListener('click', () => {
                    alert('排序选项 - 可按日期、名称或大小排序');
                });
            }
            
            // 添加键盘事件支持
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                    imageModal.classList.remove('active');
                }
            });
        }
        
        // 打开大图预览模态框
        function openModal(photo) {
            modalImage.src = photo.src;
            modalImage.alt = photo.title;
            modalTitle.textContent = photo.title;
            modalDate.textContent = `拍摄于 ${photo.date}`;
            imageModal.classList.add('active');
        }
        
        // 初始化
        document.addEventListener('DOMContentLoaded', initAlbum);
   // 性能监控
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            loadTime: 0,
            renderTime: 0,
            imageLoadTimes: []
        };
    }
    
    startMeasure(label) {
        performance.mark(`${label}-start`);
    }
    
    endMeasure(label) {
        performance.mark(`${label}-end`);
        performance.measure(label, `${label}-start`, `${label}-end`);
        const measure = performance.getEntriesByName(label)[0];
        this.metrics[label] = measure.duration;
        performance.clearMarks();
        performance.clearMeasures();
    }
    
    logMetrics() {
        console.log('性能指标:', this.metrics);
        // 可以发送到后端进行监控
    }
}

// 图片错误处理
function handleImageError(imgElement, photo) {
    imgElement.classList.add('error');
    imgElement.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23222"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23888" font-size="10">图片加载失败</text></svg>';
    
    // 添加重试按钮
    const retryBtn = document.createElement('button');
    retryBtn.textContent = '重试';
    retryBtn.className = 'retry-btn';
    retryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        imgElement.src = photo.src + '?retry=' + Date.now();
        retryBtn.remove();
    });
    
    imgElement.parentNode.appendChild(retryBtn);
} 