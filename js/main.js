const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Клик по Бургеру мобильной навигации
navButton.addEventListener('click', (event) => {
    event.stopPropagation()
    toggleMobileNav()
})


// Клик по окну за пределами навигаций
window.addEventListener('click', function () {

    if(body.classList.contains('no-scroll')) {
        toggleMobileNav()
    }
})

// Останавливаем клик внутри открытой навигации
mobileNav.addEventListener('click', function(event){
    event.stopPropagation()
})


function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navButton.classList.toggle('nav-button-close')
    body.classList.toggle('no-scroll')
}