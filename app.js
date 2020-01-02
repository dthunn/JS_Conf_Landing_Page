const navTrigger = document.querySelector('.navigation__checkbox');
const navLink = document.querySelectorAll('.navigation__item');
const modal = document.querySelector('.popup');

//after window is loaded completely
window.onload = function() {
    //hide the preloader
    document.querySelector('.loader-wrapper').style.display = 'none';
};

// Navbar
navLink.forEach(item => {
    item.addEventListener('click', e => {
        navTrigger.checked = false;
    });
});
