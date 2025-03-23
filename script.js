// Smooth scroll functionality on page load
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Initialize animation with a delay to each section
document.querySelectorAll('.fade-in').forEach((el, index) => {
    setTimeout(() => {
        el.classList.add('visible');
    }, index * 200); // Adds delay for each section
});
 
// Function to check when an element is in view
const fadeInElements = document.querySelectorAll('.About-img, .About-Content, .Experience-item');


const checkScroll = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });

};


// Trigger the scroll check on page load and scroll events
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);


// Trigger the scroll check on page load and scroll events
window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Design','App Developer','Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    BackDelay: 1200,
    loop: true,
  });

 // Smooth scrolling when clicking on footer links
document.querySelectorAll('.footer .links a, .footer .social-media a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Get target from href (without "#")
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    });
});

// Footer animation when it enters the viewport
const footer = document.querySelector('.footer');

const checkFooterInView = () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the footer is in the viewport
    if (footerTop < windowHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
};

// Trigger check on scroll and on page load
window.addEventListener('scroll', checkFooterInView);
document.addEventListener('DOMContentLoaded', checkFooterInView);

// Initial check on page load
checkFooterInView();

  
