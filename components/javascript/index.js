const scrollArrow = document.querySelector('.chevron-img')

scrollArrow.addEventListener('click', () => {
    window.scroll({
        top: 790,
        behavior: 'smooth'
    })
})

const imageLink = Array.from(document.querySelectorAll('.middle-images img'));
imageLink.map(el => el.addEventListener('click', () => {
    window.open("https://condescending-bose-8d9fc6.netlify.com/", "_self");
}));
