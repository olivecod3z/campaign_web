   const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe about section elements
        document.addEventListener('DOMContentLoaded', () => {
            const aboutBadge = document.querySelector('.about-badge');
            const aboutTitle = document.querySelector('.about-title');
            const aboutSubtitle = document.querySelector('.about-subtitle');
            const campaignImage = document.querySelector('.campaign-image');
            const candidateItems = document.querySelectorAll('.candidate-item');

            if (aboutBadge) observer.observe(aboutBadge);
            if (aboutTitle) observer.observe(aboutTitle);
            if (aboutSubtitle) observer.observe(aboutSubtitle);
            if (campaignImage) observer.observe(campaignImage);
            candidateItems.forEach(item => observer.observe(item));

            // Observe serving section elements
            const servingBadge = document.querySelector('.serving-badge');
            const servingTitle = document.querySelector('.serving-title');
            const servingSubtitle = document.querySelector('.serving-subtitle');
            const servingCards = document.querySelectorAll('.serving-card');

            if (servingBadge) observer.observe(servingBadge);
            if (servingTitle) observer.observe(servingTitle);
            if (servingSubtitle) observer.observe(servingSubtitle);
            servingCards.forEach(card => observer.observe(card));

            // Observe endorsed section elements
            const endorsedBadge = document.querySelector('.endorsed-badge');
            const endorsedTitle = document.querySelector('.endorsed-title');
            const endorsedSubtitle = document.querySelector('.endorsed-subtitle');

            if (endorsedBadge) observer.observe(endorsedBadge);
            if (endorsedTitle) observer.observe(endorsedTitle);
            if (endorsedSubtitle) observer.observe(endorsedSubtitle);

            // Observe vision section elements
            const visionBadge = document.querySelector('.vision-badge');
            const visionTitle = document.querySelector('.vision-title');
            const visionSubtitle = document.querySelector('.vision-subtitle');
            const visionImage = document.querySelector('.vision-image');
            const visionItems = document.querySelectorAll('.vision-item');

            if (visionBadge) observer.observe(visionBadge);
            if (visionTitle) observer.observe(visionTitle);
            if (visionSubtitle) observer.observe(visionSubtitle);
            if (visionImage) observer.observe(visionImage);
            visionItems.forEach(item => observer.observe(item));
            // Observe agenda section elements
            const agendaBadge = document.querySelector('.agenda-badge');
            const agendaTitle = document.querySelector('.agenda-title');
            const agendaSubtitle = document.querySelector('.agenda-subtitle');
            const agendaItems = document.querySelectorAll('.agenda-item');

            if (agendaBadge) observer.observe(agendaBadge);
            if (agendaTitle) observer.observe(agendaTitle);
            if (agendaSubtitle) observer.observe(agendaSubtitle);
            agendaItems.forEach(item => observer.observe(item));
            // Observe philosophy section elements
            const philosophyBadge = document.querySelector('.philosophy-badge');
            const philosophyTitle = document.querySelector('.philosophy-title');
            const philosophyCards = document.querySelectorAll('.philosophy-card');

            if (philosophyBadge) observer.observe(philosophyBadge);
            if (philosophyTitle) observer.observe(philosophyTitle);
            philosophyCards.forEach(card => observer.observe(card));

            // Observe highlights section elements
            const highlightsBadge = document.querySelector('.highlights-badge');
            const highlightsTitle = document.querySelector('.highlights-title');
            const highlightsDescription = document.querySelector('.highlights-description');
            const highlightsVideo = document.querySelector('.highlights-video');

            if (highlightsBadge) observer.observe(highlightsBadge);
            if (highlightsTitle) observer.observe(highlightsTitle);
            if (highlightsDescription) observer.observe(highlightsDescription);
            if (highlightsVideo) observer.observe(highlightsVideo);
            // Video play/pause control
const video = document.getElementById('campaignVideo');
const controlBtn = document.getElementById('videoControlBtn');
const playIcon = controlBtn.querySelector('.play-icon');
const pauseIcon = controlBtn.querySelector('.pause-icon');

controlBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        controlBtn.classList.add('playing');
    } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        controlBtn.classList.remove('playing');
    }
});

// Show controls when video is paused
video.addEventListener('pause', () => {
    controlBtn.classList.remove('playing');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
});

// Hide controls when video is playing (but show on hover)
video.addEventListener('play', () => {
    controlBtn.classList.add('playing');
});

// Click on video to play/pause
video.addEventListener('click', () => {
    controlBtn.click();
});
 });
 // Observe quote section elements
const quoteIcon = document.querySelector('.quote-icon');
const quoteText = document.querySelector('.quote-text');
const quoteDivider = document.querySelector('.quote-divider');
const quoteAuthor = document.querySelector('.quote-author');
const quoteTitle = document.querySelector('.quote-title');

if (quoteIcon) observer.observe(quoteIcon);
if (quoteText) observer.observe(quoteText);
if (quoteDivider) observer.observe(quoteDivider);
if (quoteAuthor) observer.observe(quoteAuthor);
if (quoteTitle) observer.observe(quoteTitle);

// Observe footer elements
const footerLogo = document.querySelector('.footer-logo');
const footerText = document.querySelector('.footer-text');
const footerCopyright = document.querySelector('.footer-copyright');

if (footerLogo) observer.observe(footerLogo);
if (footerText) observer.observe(footerText);
if (footerCopyright) observer.observe(footerCopyright);

// Video play/pause control
const video = document.getElementById('campaignVideo');
const controlBtn = document.getElementById('videoControlBtn');

if (video && controlBtn) {
    const playIcon = controlBtn.querySelector('.play-icon');
    const pauseIcon = controlBtn.querySelector('.pause-icon');

    controlBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            controlBtn.classList.add('playing');
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            controlBtn.classList.remove('playing');
        }
    });

    video.addEventListener('pause', () => {
        controlBtn.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });

    video.addEventListener('play', () => {
        controlBtn.classList.add('playing');
    });

    video.addEventListener('click', () => {
        controlBtn.click();
    });
}
// Observe CTA section
const ctaTitle = document.querySelector('.cta-title');
const ctaSubtitle = document.querySelector('.cta-subtitle');
const ctaButtons = document.querySelector('.cta-buttons');

if (ctaTitle) observer.observe(ctaTitle);
if (ctaSubtitle) observer.observe(ctaSubtitle);
if (ctaButtons) observer.observe(ctaButtons);

// Observe footer sections
const footerBrand = document.querySelector('.footer-brand');
const footerLinks = document.querySelector('.footer-links');
const footerContact = document.querySelector('.footer-contact');
const footerBottom = document.querySelector('.footer-bottom');

if (footerBrand) observer.observe(footerBrand);
if (footerLinks) observer.observe(footerLinks);
if (footerContact) observer.observe(footerContact);
if (footerBottom) observer.observe(footerBottom);
// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Create overlay
const overlay = document.createElement('div');
overlay.classList.add('mobile-overlay');
body.appendChild(overlay);

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });
}