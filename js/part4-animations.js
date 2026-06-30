// ================================================
// PART 4: CONTACT FORM + FOOTER ANIMATIONS
// ================================================

// ================================================
// FORM VALIDATION AND ANIMATIONS
// ================================================

const contactForm = document.getElementById('contactForm');
const formInputs = document.querySelectorAll('.form-input');

// Form input focus animations
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            duration: 0.3,
            borderColor: "rgba(212, 175, 55, 0.6)",
            ease: "power2.out"
        });

        gsap.to(this.parentElement.querySelector('.form-focus'), {
            duration: 0.3,
            width: "100%",
            ease: "power2.out"
        });
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            gsap.to(this, {
                duration: 0.3,
                borderColor: "rgba(212, 175, 55, 0.2)",
                ease: "power2.out"
            });

            gsap.to(this.parentElement.querySelector('.form-focus'), {
                duration: 0.3,
                width: "0%",
                ease: "power2.out"
            });
        }
    });
});

// ================================================
// FORM SUBMISSION HANDLER
// ================================================

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.form-submit');
        const originalText = submitBtn.textContent;

        // Success animation
        gsap.to(submitBtn, {
            duration: 0.3,
            background: "rgba(76, 175, 80, 1)",
            ease: "power2.out"
        });

        submitBtn.textContent = '✓ Thank You!';
        submitBtn.disabled = true;

        // Form submission would go here
        setTimeout(() => {
            // Reset form
            contactForm.reset();

            gsap.to(submitBtn, {
                duration: 0.3,
                background: "linear-gradient(135deg, var(--gold), #e6c65f)",
                ease: "power2.out"
            });

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ================================================
// CONTACT INFO CARDS ANIMATION
// ================================================

const contactInfoCards = document.querySelectorAll('.contact-info-card');

contactInfoCards.forEach((card, index) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-info-animated')) {
                entry.target.setAttribute('data-info-animated', 'true');

                gsap.from(entry.target, {
                    duration: 0.8,
                    opacity: 0,
                    y: 40,
                    delay: index * 0.1,
                    ease: "power3.out"
                });
            }
        });
    }, { threshold: 0.2 });

    observer.observe(card);

    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            y: -10,
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

// ================================================
// FORM GROUP ANIMATIONS
// ================================================

const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach((group, index) => {
    gsap.from(group, {
        duration: 0.6,
        opacity: 0,
        x: -30,
        delay: index * 0.05,
        ease: "power3.out"
    });
});

// ================================================
// SOCIAL LINKS ANIMATION
// ================================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            y: -8,
            scale: 1.15,
            ease: "back.out"
        });
    });

    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            y: 0,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// ================================================
// FOOTER LINKS ANIMATION
// ================================================

const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            x: 10,
            color: "var(--gold)",
            ease: "power2.out"
        });
    });

    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            x: 0,
            color: "rgba(255, 255, 255, 0.65)",
            ease: "power2.out"
        });
    });
});

// ================================================
// FOOTER SCROLL ANIMATION
// ================================================

function animateFooterColumns() {
    const footerColumns = document.querySelectorAll('.footer-column');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-footer-animated')) {
                entry.target.setAttribute('data-footer-animated', 'true');

                gsap.from(entry.target, {
                    duration: 0.8,
                    opacity: 0,
                    y: 40,
                    delay: index * 0.1,
                    ease: "power3.out"
                });
            }
        });
    }, { threshold: 0.3 });

    footerColumns.forEach(column => observer.observe(column));
}

// ================================================
// SMOOTH SCROLL TO SECTIONS
// ================================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;

            gsap.to(window, {
                duration: 0.8,
                scrollTo: offsetTop,
                ease: "power3.out"
            });
        }
    });
});

// ================================================
// INITIALIZATION - PART 4
// ================================================

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        animateFooterColumns();
    }, 300);
});

// ================================================
// WINDOW LOAD - PART 4
// ================================================

window.addEventListener('load', function() {
    animateFooterColumns();
});

// ================================================
// INPUT VALIDATION
// ================================================

const phoneInput = document.querySelector('input[type="tel"]');

if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9+\-()\s]/g, '');
    });
}

const emailInput = document.querySelector('input[type="email"]');

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
        
        if (this.value && !isValid) {
            gsap.to(this, {
                duration: 0.2,
                borderColor: "rgba(255, 0, 0, 0.5)",
                ease: "power2.out"
            });
        }
    });
}
