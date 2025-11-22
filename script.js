document.addEventListener('DOMContentLoaded', function() {
    // 1. Set Current Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Newsletter Form Handling
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if(email) {
                // Simulate API call
                const button = this.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Subscribed!';
                button.classList.add('bg-green-600', 'hover:bg-green-500');
                button.classList.remove('bg-blue-600', 'hover:bg-blue-500');
                
                emailInput.value = '';
                alert(`Terima kasih! Email ${email} telah terdaftar.`);
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('bg-green-600', 'hover:bg-green-500');
                    button.classList.add('bg-blue-600', 'hover:bg-blue-500');
                }, 3000);
            }
        });
    }

    // 3. Mobile Accordion Logic for Footer Links
    const headings = document.querySelectorAll('.footer-heading');
    
    // Only activate on mobile/tablet where the lists are hidden by default class 'hidden md:block'
    // We need to check window width or just apply logic and let CSS handle display
    
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Check if we are in mobile view (md is 768px in Tailwind)
            if (window.innerWidth < 768) {
                const targetId = this.getAttribute('data-target');
                const targetList = document.getElementById(targetId);
                const icon = this.querySelector('.fa-chevron-down');
                
                if (targetList) {
                    // Toggle hidden class logic for Tailwind
                    // The lists have 'hidden md:block'. 
                    // To show on mobile, we remove 'hidden'.
                    
                    if (targetList.classList.contains('hidden')) {
                        targetList.classList.remove('hidden');
                        targetList.classList.add('block', 'animate-fade-in');
                        if(icon) icon.classList.add('rotate-180');
                    } else {
                        targetList.classList.add('hidden');
                        targetList.classList.remove('block', 'animate-fade-in');
                        if(icon) icon.classList.remove('rotate-180');
                    }
                }
            }
        });
    });
});