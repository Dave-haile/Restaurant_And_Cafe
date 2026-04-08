
/* ========================================
   THE HEARTHSTONE CAFÉ & BISTRO
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initHeaderScroll();
    initMenuFilters();
    initGalleryFilters();
    initLightbox();
    initReservationForm();
    initContactForm();
    initSmoothScroll();
});

/* ========================================
   NAVIGATION
   ======================================== */

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Toggle aria-expanded
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/* ========================================
   HEADER SCROLL EFFECT
   ======================================== */

function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }
}

/* ========================================
   MENU FILTERS
   ======================================== */

function initMenuFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const menuItems = document.querySelectorAll('.menu-item');
    const clearBtn = document.querySelector('.clear-filters');

    if (filterBtns.length === 0) return;

    let activeFilters = [];

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;

            if (this.classList.contains('clear-filters')) {
                // Clear all filters
                activeFilters = [];
                filterBtns.forEach(b => b.classList.remove('active'));
            } else {
                // Toggle filter
                this.classList.toggle('active');

                if (activeFilters.includes(filter)) {
                    activeFilters = activeFilters.filter(f => f !== filter);
                } else {
                    activeFilters.push(filter);
                }
            }

            // Update clear button visibility
            if (clearBtn) {
                clearBtn.style.display = activeFilters.length > 0 ? 'inline-flex' : 'none';
            }

            // Filter items
            menuItems.forEach(item => {
                const itemTags = item.dataset.tags || '';

                if (activeFilters.length === 0) {
                    item.classList.remove('hidden');
                } else {
                    const hasAllFilters = activeFilters.every(filter =>
                        itemTags.includes(filter)
                    );

                    if (hasAllFilters) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
}

/* ========================================
   GALLERY FILTERS
   ======================================== */

function initGalleryFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterTabs.length === 0) return;

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.3s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/* ========================================
   LIGHTBOX
   ======================================== */

function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');

    if (!lightbox || galleryItems.length === 0) return;

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption h3');
    const lightboxCategory = lightbox.querySelector('.lightbox-caption span');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const visibleItems = () => Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));

    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const items = visibleItems();
            currentIndex = items.indexOf(this);
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const items = visibleItems();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateLightbox();
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const items = visibleItems();
        currentIndex = (currentIndex + 1) % items.length;
        updateLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    function updateLightbox() {
        const items = visibleItems();
        const item = items[currentIndex];
        const style = item.querySelector('.gallery-image').style.background;
        const title = item.querySelector('h3').textContent;
        const category = item.querySelector('.gallery-category').textContent;

        lightboxImage.style.background = style;
        lightboxCaption.textContent = title;
        lightboxCategory.textContent = category;
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ========================================
   RESERVATION FORM
   ======================================== */

function initReservationForm() {
    const form = document.getElementById('reservationForm');
    const formSuccess = document.getElementById('formSuccess');
    const detailsContainer = document.getElementById('reservationDetails');

    if (!form) return;

    // Set minimum date to today
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        setTimeout(() => {
            // Hide form, show success
            form.style.display = 'none';
            formSuccess.style.display = 'block';

            // Display reservation details
            if (detailsContainer) {
                detailsContainer.innerHTML = `
                    <p><strong>Date:</strong> ${formatDate(data.date)}</p>
                    <p><strong>Time:</strong> ${formatTime(data.time)}</p>
                    <p><strong>Guests:</strong> ${data.guests}</p>
                    <p><strong>Name:</strong> ${data.name}</p>
                    ${data.occasion ? `<p><strong>Occasion:</strong> ${capitalize(data.occasion)}</p>` : ''}
                `;
            }

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    });
}

/* ========================================
   CONTACT FORM
   ======================================== */

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('contactSuccess');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            form.style.display = 'none';
            formSuccess.style.display = 'block';

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    });
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add CSS animation for gallery items
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

/* ========================================
   LAZY LOADING (Intersection Observer)
   ======================================== */

// Add lazy loading for images (if real images are added later)
if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                if (lazyImage.dataset.src) {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.removeAttribute('data-src');
                }
                lazyImage.classList.add('loaded');
                observer.unobserve(lazyImage);
            }
        });
    });

    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        lazyImageObserver.observe(img);
    });
}
