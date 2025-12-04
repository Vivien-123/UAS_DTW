document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            formMessage.innerHTML = '<span class="text-warning">Sending message...</span>';
            
            setTimeout(() => {
                formMessage.innerHTML = '<span class="text-success">Thank you! Your message has been sent successfully.</span>';
                contactForm.reset(); 
                
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            }, 2000);
        });
    }
});