
const headers = document.querySelectorAll('[data-js="header"]');
const bodies = document.querySelectorAll('[data-js="body"]');
const arrows = document.querySelectorAll('[data-js="arrow"]');

const toggleElementClasses = index => {
    bodies[index].classList.toggle('active');
    headers[index].classList.toggle('active');
    arrows[index].classList.toggle('active');
}

headers.forEach((header, index) => {
    header.dataset.index = index;
    header.addEventListener('click', () => toggleElementClasses(index))
});