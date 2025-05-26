
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 11, 15, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 11, 15, 0.95)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .card, .hero-content').forEach(el => {
        observer.observe(el);
    });

    // Initialize interactive elements
    makeVideosClickable();
    makeGameClickable();
    makeLinksClickable();
});

// Video functionality
function makeVideosClickable() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            // Make videos clickable and interactive
            iframe.style.pointerEvents = 'auto';
            container.style.cursor = 'pointer';
            container.classList.add('clickable');
            
            // Add hover effect
            container.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            container.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            // Enable autoplay on click for YouTube videos
            if (iframe.src.includes('youtube.com')) {
                container.addEventListener('click', function(e) {
                    if (e.target === container || e.target === iframe) {
                        const src = iframe.src;
                        if (!src.includes('autoplay=1')) {
                            iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
                        }
                    }
                });
            }
        }
    });
}

// Game functionality
function makeGameClickable() {
    const gameContainers = document.querySelectorAll('.game-container, .game-iframe-container');
    
    gameContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            iframe.style.pointerEvents = 'auto';
            container.style.cursor = 'pointer';
            container.classList.add('clickable');
            
            // Add hover effect
            container.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            container.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            // Make sure iframe is interactive
            iframe.addEventListener('load', function() {
                this.style.pointerEvents = 'auto';
            });
        }
    });
}

// External links functionality
function makeLinksClickable() {
    const externalLinks = document.querySelectorAll('.external-link, a[href^="http"], a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        link.classList.add('clickable');
        
        // Ensure target and rel attributes are set for external links
        if (link.href && (link.href.startsWith('http://') || link.href.startsWith('https://'))) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
        
        // Add visual feedback
        link.addEventListener('mouseenter', function() {
            this.style.color = '#9b87f5';
            this.style.transform = 'translateX(2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#00f6ff';
            this.style.transform = 'translateX(0)';
        });

        // Ensure click events work
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            // Let the default action happen (opening the link)
        });
    });

    // Also handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#')) {
                window.location.href = href;
            }
        });
    });
}

// Utility function to create video embed
function createVideoEmbed(videoId, type = 'youtube') {
    if (type === 'youtube') {
        return `
            <div class="video-container clickable">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    style="pointer-events: auto;">
                </iframe>
            </div>
        `;
    } else if (type === 'vimeo') {
        return `
            <div class="video-container clickable">
                <iframe 
                    src="https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                    allowfullscreen
                    style="pointer-events: auto;">
                </iframe>
            </div>
        `;
    }
}

// JavaScript Art display functionality
function displayJavaScriptArt() {
    const artworks = [
        {
            title: "Random Triangles",
            description: "An interactive visualization that creates randomly colored and positioned triangles that rotate and transform based on user input.",
            file: "RNDM.html"
        },
        {
            title: "Random Cubes",
            description: "A generative art piece that creates a colorful arrangement of 3D cubes in an isometric grid.",
            file: "rr.html"
        },
        {
            title: "Interactive Butterfly Animation",
            description: "A dynamic animation featuring butterflies that follow mouse movement, combined with abstract shapes.",
            file: "fye.html"
        },
        {
            title: "Fireworks Display",
            description: "An interactive fireworks simulation that responds to user clicks, creating colorful explosions.",
            file: "fl.html"
        },
        {
            title: "Kwam's Flower",
            description: "A beautiful 3D flower animation with mathematical precision and artistic flair.",
            file: "RNDM2.html"
        }
    ];

    return artworks;
}

// Enhanced click handling for better compatibility
document.addEventListener('click', function(e) {
    // Ensure external links work
    if (e.target.matches('.external-link, .external-link *')) {
        const link = e.target.closest('.external-link');
        if (link && link.href) {
            window.open(link.href, '_blank', 'noopener,noreferrer');
        }
    }
});

// Force enable pointer events on all interactive elements
function forceInteractivity() {
    const interactiveSelectors = [
        'a', 'button', 'iframe', '.video-container', '.game-container', 
        '.nav-link', '.external-link', '.btn', '.clickable'
    ];
    
    interactiveSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.pointerEvents = 'auto';
            element.style.cursor = 'pointer';
        });
    });
}

// Run on page load
window.addEventListener('load', forceInteractivity);
