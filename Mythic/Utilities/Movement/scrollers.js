export function applySmoothScroll(selector = 'a[href^="#"]', offset = 0) {
    document.querySelectorAll(selector).forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const scrollToPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                window.history.pushState(null, null, targetId); // Update the URL with the hash

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
export function scrollToHashOnLoad(offset = 0) {
    const targetId = window.location.hash;
    if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const scrollToPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }
}
