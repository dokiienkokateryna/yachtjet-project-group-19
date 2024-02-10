const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    mobMenu: document.querySelector(".mob-menu"),
    closeMenuBtn: document.querySelector(".icon-close-btn"),
    body: document.querySelector('body'),
    navLinks: document.querySelectorAll(".button-text-mob")
}

const toggleMenuOpen = () => {
refs.mobMenu.classList.toggle("is-open-mob");
refs.body.classList.toggle("noScroll");
}

const closeMenu = () => {
    refs.mobMenu.classList.remove("is-open-mob");
    refs.body.classList.remove("noScroll");
}

refs.openMenuBtn.addEventListener("click", toggleMenuOpen);
refs.closeMenuBtn.addEventListener("click", toggleMenuOpen);

refs.navLinks.forEach(link => {
    link.addEventListener("click", closeMenu)
})