// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'active' class to images in viewport
function addActiveClassOnScroll() {
    const images = document.querySelectorAll('.slide-in');
    images.forEach(image => {
        if (isInViewport(image)) {
            image.classList.add('active');
        }
    });
}

// Function to debounce the scroll event
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Attach addActiveClassOnScroll function to scroll event
window.addEventListener('scroll', debounce(addActiveClassOnScroll));
