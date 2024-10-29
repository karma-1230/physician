document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial carousel
    function showTestimonial(index) {
        testimonials[currentTestimonial].style.display = 'none';
        testimonials[index].style.display = 'block';
        currentTestimonial = index;
    }

    function nextTestimonial() {
        let next = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(next);
    }

    setInterval(nextTestimonial, 5000);

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    // Health Tip of the Day
    const healthTips = [
        "Drink at least 8 glasses of water daily.",
        "Aim for 30 minutes of exercise 5 days a week.",
        "Eat a variety of colorful fruits and vegetables.",
        "Get 7-9 hours of sleep each night.",
        "Practice mindfulness or meditation for stress relief.",
        "Limit processed foods and added sugars.",
        "Take breaks and stretch if you sit for long periods."
    ];

    function getRandomTip() {
        return healthTips[Math.floor(Math.random() * healthTips.length)];
    }

    const tipElement = document.createElement('div');
    tipElement.classList.add('health-tip');
    tipElement.innerHTML = `<h3>Health Tip of the Day</h3><p>${getRandomTip()}</p>`;
    document.querySelector('.blog').insertBefore(tipElement, document.querySelector('.blog-grid'));

    // Update tip daily
    if (localStorage.getItem('lastTipDate') !== new Date().toDateString()) {
        localStorage.setItem('lastTipDate', new Date().toDateString());
        localStorage.setItem('currentTip', getRandomTip());
    }
    tipElement.querySelector('p').textContent = localStorage.getItem('currentTip');
});