const scrollArrow = document.querySelector('.chevron-img')

scrollArrow.addEventListener('click', () => {
    window.scroll({
        top: 790,
        behavior: 'smooth'
    })
})