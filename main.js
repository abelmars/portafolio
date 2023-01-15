
let iconMenu = document.querySelector('#icon__menu');
let menu = document.querySelector('#content__menu');


function closeMenu() {
    menu.classList.toggle('active'); 
}

iconMenu.addEventListener('click', closeMenu);
    
let contentMenu = document.querySelectorAll('#content__menu ul li');

for (const li of contentMenu) {
    li.addEventListener("click", closeMenu);
}
