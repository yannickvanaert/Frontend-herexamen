const mainMenu = document.querySelector('.navbar_links');
const closeMenu = document.querySelector('.close_menu');
const openMenu = document.querySelector('.open_menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}