/* ================================================
   BAANI OVERSEAS SERVICES - JAVASCRIPT
   Part 1: Animations & Interactions
   ================================================ */

// ================================================
// PARTICLE GENERATION
// ================================================

function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        particle.style.left = left + '%';
        particle.style.top = top + '%';
        
        container.appendChild(particle);
        
        // Animate particles
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    gsap.fromTo(particle, 
        {
            opacity: 0,
            y: 0,
            x: 0
        },
        {
            opacity: 0,
            y: -window.innerHeight * 1.5,
            x: (Math.random() - 0.5) * 200,
            duration: duration,
            delay: delay,
            repeat: -1,
            ease: "none",
            onStart: function() {
                particle.style.opacity = Math.random() * 0.6 + 0.3;
            }
        }
    );
}

// ================================================
// NAVIGATION SCROLL EFFECT
// ================================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ================================================
// MOUSE GLOW EFFECT
// ================================================

document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Add subtle glow effect
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(Math.pow(e.clientX - particleX, 2) + Math.pow(e.clientY - particleY, 2));
        
        if (distance < 150) {
            particle.style.opacity = Math.min(1, parseFloat(particle.style.opacity) + 0.3);
        }
    });
});

// ================================================
// CTA BUTTON INTERACTIONS
// ================================================

const ctaButtons = document.querySelectorAll('.cta-button, .primary-btn, .secondary-btn');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// ================================================
// HAMBURGER MENU
// ================================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Hamburger animation
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            gsap.to(spans[0], { duration: 0.3, rotation: 45, y: 12 });
            gsap.to(spans[1], { duration: 0.3, opacity: 0 });
            gsap.to(spans[2], { duration: 0.3, rotation: -45, y: -12 });
        } else {
            gsap.to(spans[0], { duration: 0.3, rotation: 0, y: 0 });
            gsap.to(spans[1], { duration: 0.3, opacity: 1 });
            gsap.to(spans[2], { duration: 0.3, rotation: 0, y: 0 });
        }
    });
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            gsap.to(spans[0], { duration: 0.3, rotation: 0, y: 0 });
            gsap.to(spans[1], { duration: 0.3, opacity: 1 });
            gsap.to(spans[2], { duration: 0.3, rotation: 0, y: 0 });
        });
    });
}

// ================================================
// STAT CARDS COUNTER ANIMATION
// ================================================

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                
                const text = entry.target.textContent;
                const number = parseInt(text);
                const isPercentage = text.includes('%');
                const suffix = isPercentage ? '%' : '+';
                
                let currentValue = 0;
                const duration = 2;
                const increment = number / (duration * 60);
                
                gsap.to({ value: 0 }, {
                    value: number,
                    duration: duration,
                    ease: "power2.out",
                    onUpdate: function() {
                        currentValue = Math.floor(this.targets()[0].value);
                        entry.target.textContent = currentValue + suffix;
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(number => counterObserver.observe(number));
}

// ================================================
// SMOOTH SCROLL LINKS
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: "power3.inOut"
            });
        }
    });
});

// ================================================
// INITIALIZATION
// ================================================

window.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Animate counters when page loads
    setTimeout(() => {
        animateCounters();
    }, 500);
    
    // Animate hero content on load
    gsap.from('.hero-left', {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power3.out"
    });
    
    gsap.from('.hero-center', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: 0.2
    });
    
    gsap.from('.hero-right', {
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power3.out"
    });
    
    // Stagger stat cards
    gsap.from('.stat-card', {
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.statistics',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
});

// ================================================
// WINDOW RESIZE HANDLER
// ================================================

window.addEventListener('resize', function() {
    // Recalculate particle positions if needed
});

// ================================================
// KEYBOARD NAVIGATION
// ================================================

document.addEventListener('keydown', function(e) {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        gsap.to(spans[0], { duration: 0.3, rotation: 0, y: 0 });
        gsap.to(spans[1], { duration: 0.3, opacity: 1 });
        gsap.to(spans[2], { duration: 0.3, rotation: 0, y: 0 });
    }
});

// ================================================
// PHONE LINK HANDLER
// ================================================

const phoneLink = document.querySelector('.phone-link');
if (phoneLink) {
    phoneLink.addEventListener('click', function(e) {
        if (!navigator.platform.match(/iPhone|iPod|iPad|Android/)) {
            // Fallback for desktop
            alert('Phone number: +91 98759 61608');
        }
    });
}
