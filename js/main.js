const navbarList = document.querySelector('.navbar__list');
const barsBtn = document.querySelector('.bars__btn');

barsBtn.addEventListener('click', () => {
    navbarList.classList.toggle('navbar__list--active');

    if (navbarList.classList.contains('navbar__list--active')) {
        barsBtn.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
        `
    } else {
        barsBtn.innerHTML = `
            <i class="fa-solid fa-bars"></i>
        `
    }
});