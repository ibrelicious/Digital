// script.js

// Wait until the DOM is loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu after clicking a link on mobile
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('open');
                }
            });
        });
    }

    // Smooth scrolling is handled by CSS (scroll-behavior), but we can offset header height for anchor navigation if needed
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const responseEl = document.getElementById('formResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Retrieve form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Build mailto link with multiple recipients (cc)
            const to = 'UmutNebi.Koyuncu@medieinstitutet.se';
            const cc = [
                'MohammadRaihanNasir.Bhuiyan@medieinstitutet.se',
                'Abdulah.Ibrahim@medieinstitutet.se',
                'Sathisha.Dikkumbura@medieinstitutet.se',
                'Amir.Desta@medieinstitutet.se'
            ].join(',');
            const subject = encodeURIComponent('Kontaktförfrågan från hemsidan');
            const body = encodeURIComponent(
                `Namn: ${name}\nE‑post: ${email}\n\nMeddelande:\n${message}`
            );

            const mailtoLink = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${subject}&body=${body}`;

            // Trigger mailto. Using setTimeout allows the UI to update and show the response message before redirecting
            window.location.href = mailtoLink;

            // Provide feedback to the user
            if (responseEl) {
                responseEl.textContent = 'Tack! Ditt meddelande har öppnat ditt mailprogram.';
            }

            // Optionally, clear the form fields
            contactForm.reset();
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});