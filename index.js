document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.word');
console.log(elements);
    window.addEventListener('scroll', function() {
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.setProperty('--delay', `${index * 0.1}s`);
                element.classList.add('visible');
            }
        });
    });
});
