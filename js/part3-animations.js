// ================================================
// PART 3: STUDY PROCESS + TESTIMONIALS + FAQ ANIMATIONS
// ================================================

// ================================================
// TIMELINE ANIMATIONS
// ================================================

const timelineItems = document.querySelectorAll('.timeline-item');
const timelineMarkers = document.querySelectorAll('.timeline-marker');

timelineItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            x: this.classList.contains(':nth-child(odd)') ? 10 : -10,
            ease: "power2.out"
        });

        gsap.to(this.querySelector('.timeline-marker'), {
            duration: 0.3,
            scale: 1.15,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            x: 0,
            ease: "power2.out"
        });

        gsap.to(this.querySelector('.timeline-marker'), {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// ================================================
// TIMELINE SCROLL ANIMATION
// ================================================

function animateTimeline() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');

                gsap.from(entry.target, {
                    duration: 0.8,
                    opacity: 0,
                    x: entry.target.style.order % 2 === 0 ? -50 : 50,
                    delay: index * 0.1,
                    ease: "power3.out"
                });
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
}

// ================================================
// TESTIMONIAL CARDS ANIMATION
// ================================================

const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const stars = this.querySelectorAll('.star');

        gsap.to(this, {
            duration: 0.4,
            y: -20,
            boxShadow: "0 30px 60px rgba(212, 175, 55, 0.3)",
            ease: "power2.out"
        });

        stars.forEach((star, index) => {
            gsap.to(star, {
                duration: 0.3,
                scale: 1.3,
                rotation: 15,
                delay: index * 0.05,
                ease: "back.out"
            });
        });
    });

    card.addEventListener('mouseleave', function() {
        const stars = this.querySelectorAll('.star');

        gsap.to(this, {
            duration: 0.4,
            y: 0,
            boxShadow: "0 0 0 rgba(212, 175, 55, 0)",
            ease: "power2.out"
        });

        stars.forEach((star) => {
            gsap.to(star, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });
});

// ================================================
// FAQ ACCORDION FUNCTIONALITY
// ================================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function(e) {
        e.preventDefault();

        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        const answer = this.nextElementSibling;

        // Close all other items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                
                gsap.to(item.querySelector('.faq-answer'), {
                    duration: 0.3,
                    maxHeight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    ease: "power2.inOut"
                });
            }
        });

        // Toggle current item
        if (isActive) {
            faqItem.classList.remove('active');

            gsap.to(answer, {
                duration: 0.4,
                maxHeight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                ease: "power2.inOut"
            });
        } else {
            faqItem.classList.add('active');

            // Calculate max height dynamically
            const tempHeight = answer.scrollHeight;

            gsap.to(answer, {
                duration: 0.4,
                maxHeight: tempHeight + 40,
                paddingTop: 20,
                paddingBottom: 20,
                ease: "power2.inOut"
            });
        }
    });
});

// ================================================
// FAQ SCROLL ANIMATION
// ================================================

function animateFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-faq-animated')) {
                entry.target.setAttribute('data-faq-animated', 'true');

                gsap.from(entry.target, {
                    duration: 0.6,
                    opacity: 0,
                    y: 30,
                    delay: index * 0.05,
                    ease: "power3.out"
                });
            }
        });
    }, { threshold: 0.2 });

    faqItems.forEach(item => observer.observe(item));
}

// ================================================
// TESTIMONIAL SCROLL ANIMATION
// ================================================

function animateTestimonials() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-testimonial-animated')) {
                entry.target.setAttribute('data-testimonial-animated', 'true');

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

    testimonialCards.forEach(card => observer.observe(card));
}

// ================================================
// MARKER NUMBER ANIMATION
// ================================================

function animateMarkerNumbers() {
    const markers = document.querySelectorAll('.marker-number');

    markers.forEach(marker => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-marker-animated')) {
                    entry.target.setAttribute('data-marker-animated', 'true');

                    gsap.from(entry.target, {
                        duration: 0.6,
                        opacity: 0,
                        scale: 0,
                        rotation: -180,
                        ease: "back.out"
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(marker);
    });
}

// ================================================
// INITIALIZATION - PART 3
// ================================================

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        animateTimeline();
        animateFAQItems();
        animateTestimonials();
        animateMarkerNumbers();
    }, 300);
});

// ================================================
// WINDOW LOAD - PART 3
// ================================================

window.addEventListener('load', function() {
    // Re-check animations after all resources load
    animateTimeline();
    animateFAQItems();
    animateTestimonials();
});

// ================================================
// RESPONSIVE TIMELINE ADJUSTMENTS
// ================================================

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        timelineItems.forEach(item => {
            item.style.flexDirection = 'column';
        });
    } else {
        timelineItems.forEach(item => {
            item.style.flexDirection = '';
        });
    }
});
