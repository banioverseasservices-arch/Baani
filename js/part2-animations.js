// ================================================
// PART 2: WHY CHOOSE & SERVICES ANIMATIONS
// ================================================

// ================================================
// CARD HOVER EFFECTS
// ================================================

const whyCards = document.querySelectorAll('.why-card');
const serviceCards = document.querySelectorAll('.service-card');

// Why Choose Cards
whyCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            y: -15,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            y: 0,
            ease: "power2.out"
        });
    });
});

// Service Cards
serviceCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.4,
            y: -20,
            boxShadow: "0 30px 60px rgba(212, 175, 55, 0.25)",
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.4,
            y: 0,
            boxShadow: "0 0 0 rgba(212, 175, 55, 0)",
            ease: "power2.out"
        });
    });
});

// ================================================
// SCROLL ANIMATIONS FOR CARDS
// ================================================

function animateCardsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                
                gsap.from(entry.target, {
                    duration: 0.8,
                    opacity: 0,
                    y: 40,
                    delay: index * 0.1,
                    ease: "power3.out"
                });
            }
        });
    }, observerOptions);

    // Observe Why Cards
    whyCards.forEach(card => cardObserver.observe(card));
    
    // Observe Service Cards
    serviceCards.forEach(card => cardObserver.observe(card));
}

// ================================================
// STAGGERED TEXT ANIMATION
// ================================================

function animateSectionHeaders() {
    const headers = document.querySelectorAll('.section-header');
    
    headers.forEach(header => {
        const title = header.querySelector('.section-title');
        const subtitle = header.querySelector('.section-subtitle');
        
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-header-animated')) {
                    entry.target.setAttribute('data-header-animated', 'true');
                    
                    gsap.from(title, {
                        duration: 0.8,
                        opacity: 0,
                        y: -30,
                        ease: "power3.out"
                    });
                    
                    gsap.from(subtitle, {
                        duration: 0.8,
                        opacity: 0,
                        y: 20,
                        delay: 0.2,
                        ease: "power3.out"
                    });
                }
            });
        }, { threshold: 0.5 });
        
        headerObserver.observe(header);
    });
}

// ================================================
// SERVICE CARD FEATURE LIST ANIMATION
// ================================================

function animateServiceFeatures() {
    serviceCards.forEach(card => {
        const features = card.querySelectorAll('.service-features li');
        
        card.addEventListener('mouseenter', function() {
            features.forEach((feature, index) => {
                gsap.to(feature, {
                    duration: 0.3,
                    x: 10,
                    color: var(--gold),
                    delay: index * 0.05,
                    ease: "power2.out"
                });
            });
        });
        
        card.addEventListener('mouseleave', function() {
            features.forEach((feature, index) => {
                gsap.to(feature, {
                    duration: 0.3,
                    x: 0,
                    color: "rgba(212, 175, 55, 0.9)",
                    delay: index * 0.05,
                    ease: "power2.out"
                });
            });
        });
    });
}

// ================================================
// CARD NUMBER ANIMATION
// ================================================

function animateServiceNumbers() {
    const numbers = document.querySelectorAll('.service-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-number-animated')) {
                entry.target.setAttribute('data-number-animated', 'true');
                
                const targetNumber = parseInt(entry.target.textContent);
                
                gsap.to({ value: 0 }, {
                    value: targetNumber,
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        entry.target.textContent = String(Math.floor(this.targets()[0].value)).padStart(2, '0');
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    numbers.forEach(number => numberObserver.observe(number));
}

// ================================================
// HIGHLIGHT GOLD TEXT ANIMATION
// ================================================

function animateGoldText() {
    const goldTexts = document.querySelectorAll('.highlight-gold');
    
    goldTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                textShadow: "0 0 30px rgba(212, 175, 55, 0.8)",
                ease: "power2.out"
            });
        });
        
        text.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                textShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
                ease: "power2.out"
            });
        });
    });
}

// ================================================
// INITIALIZATION - PART 2
// ================================================

window.addEventListener('DOMContentLoaded', function() {
    // Initialize Part 2 animations
    setTimeout(() => {
        animateCardsOnScroll();
        animateSectionHeaders();
        animateServiceFeatures();
        animateServiceNumbers();
        animateGoldText();
    }, 300);
});

// ================================================
// WINDOW LOAD - PART 2
// ================================================

window.addEventListener('load', function() {
    // Re-check animations after all resources load
    animateCardsOnScroll();
});
