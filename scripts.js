function slidesPlugin(activeSlide) {
    let slides = document.querySelectorAll('.slide')
slides[activeSlide].classList.add('active')
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            removeActive()
            slide.classList.add('active')
        })
    })

    function removeActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(4)
