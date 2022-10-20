const links = document.querySelectorAll(".menu__link");
const arrayLinks = [...links];
const subMenu = document.querySelectorAll(".menu_sub");
const arraySubMenu = [...subMenu];
const mainMenu = document.querySelectorAll(".menu_main > li");
const arrayMainMenu = [...mainMenu];
let numSub = 0;
let n = 0;
let sum = (1 + (mainMenu.length - 1)) / 2 * (mainMenu.length - 1);

arrayMainMenu.forEach ((element) => {
    if (element.children.length > 1) {
        element.children[0].onclick = function() {
            numSub = n - element.querySelectorAll(".menu__item").length - sum;
            arraySubMenu.forEach((item) => item.className = "menu menu_sub");
            arraySubMenu[numSub].className = "menu menu_sub menu_active";
            return false;
        }
        n = n + element.querySelectorAll(".menu__item").length;
    }
    n++;
});
