// Scroll arrow effects
const scrollArrow = document.querySelector('.chevron-img img')
scrollArrow.addEventListener('mouseover', (event) => event.target.style.transform = 'scale(1.5)');
scrollArrow.addEventListener('mouseout', (event) => event.target.style.transform = 'scale(1.0)');

scrollArrow.addEventListener('click', () => {
    window.scroll({
        top: 790,
        behavior: 'smooth'
    })
})

// middle three images as links with mouseover zoom
const imageLink = Array.from(document.querySelectorAll('.middle-images img'));
imageLink.map(el => el.addEventListener('click', () => {
    window.open("https://condescending-bose-8d9fc6.netlify.com/", "_self");
}));
imageLink.map(el => el.addEventListener('mouseover', () => {
    el.style.transform = 'scale(1.1)';
}));
imageLink.map(el => el.addEventListener('mouseout', () => {
    el.style.transform = 'scale(1)';
}));

// button mouseover effects
const indexButton = Array.from(document.querySelectorAll('.btn'))
indexButton.map(el => el.addEventListener('mouseover', () => {
    el.style.transform = 'scale(1.1)';
}));
indexButton.map(el => el.addEventListener('mouseout', () => {
    el.style.transform = 'scale(1)';
}));

