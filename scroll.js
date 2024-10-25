const header = document.getElementById('header');
const originalOffsetY = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > originalOffsetY) {
        header.classList.remove('bg-opacity-0');
        header.classList.add('bg-opacity-100');
    } else {
        header.classList.remove('bg-opacity-100');
        header.classList.add('bg-opacity-0');
    }
});