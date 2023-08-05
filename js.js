// Event to hamburguer menu for responsive display
const menuIcon = document.querySelector('.icon-menu');
const menuList = document.querySelector('.toggle-list');

menuIcon.addEventListener(
    'click', () => {
        menuList.classList.toggle('open');}
    );
