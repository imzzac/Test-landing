function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission Feedback
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    this.innerHTML = '<p style="color: green;">Thanks! We\'ll get back soon. 🚀</p>';
    // Actual submit happens via Netlify
});