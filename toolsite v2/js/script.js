// ============================================ 
// IMPROVED NAVIGATION - NO FLICKER
// ============================================

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    const pageMap = {
        '': 'index.html',
        'index.html': 'index.html',
        'about.html': 'about.html',
        'products.html': 'products.html',
        'branches.html': 'branches.html',
        'contacts.html': 'contacts.html'
    };
    
    const currentPageKey = pageMap[currentPage] || currentPage;
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkPage = linkPath.split('/').pop();
        
        // Remove active class
        link.classList.remove('active');
        
        // Check various conditions
        if (linkPage === currentPageKey) {
            link.classList.add('active');
        }
        
        // Check for index pages
        if ((currentPage === '' || currentPage === 'index.html') && 
            (linkPath === 'index.html' || linkPath === '../index.html' || linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // Check for relative paths
        if (currentPath.includes(linkPage) && linkPage !== 'index.html') {
            link.classList.add('active');
        }
    });
    
    const hasActive = document.querySelector('.nav-menu a.active');
    if (!hasActive) {
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (currentPath.includes(linkHref.replace('../', '').replace('.html', ''))) {
                link.classList.add('active');
            }
        });
    }
}

setActiveNavLink();

document.addEventListener('DOMContentLoaded', setActiveNavLink);