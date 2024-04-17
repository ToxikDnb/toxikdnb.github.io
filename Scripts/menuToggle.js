let isActive = false;

function toggleMenu() {
    var menuPanel = document.getElementById("menu");
    var menu = document.querySelector(".Menu");
    var menuDecor = document.getElementById("menuDecor"); 
    isActive = !isActive;
    menuDecor.classList.toggle("show");
    menu.classList.toggle("show");
}
