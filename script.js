
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
});

// Video functionality
function makeVideosClickable() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe && iframe.src.includes('youtube.com')) {
            // Make YouTube videos clickable
            iframe.style.pointerEvents = 'auto';
            container.style.cursor = 'pointer';
            
            container.addEventListener('click', function(e) {
                if (e.target === container) {
                    const src = iframe.src;
                    if (!src.includes('autoplay=1')) {
                        iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
                    }
                }
            });
        }
    });
}

// Game functionality
function makeGameClickable() {
    const gameContainers = document.querySelectorAll('.game-container, .video-container');
    
    gameContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe) {
            iframe.style.pointerEvents = 'auto';
            container.style.cursor = 'pointer';
            
            // Add hover effect
            container.addEventListener('mouseenter', function() {
                container.style.transform = 'scale(1.02)';
                container.style.transition = 'transform 0.3s ease';
            });
            
            container.addEventListener('mouseleave', function() {
                container.style.transform = 'scale(1)';
            });
        }
    });
}

// External links functionality
function makeLinksClickable() {
    const externalLinks = document.querySelectorAll('.external-link, a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        
        // Ensure target and rel attributes are set
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
    });
}

// Initialize interactive elements when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    makeVideosClickable();
    makeGameClickable();
    makeLinksClickable();
});

// Utility function to create video embed
function createVideoEmbed(videoId, type = 'youtube') {
    if (type === 'youtube') {
        return `
            <div class="video-container">
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
            <div class="video-container">
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
        }
    ];

    return artworks;
}
