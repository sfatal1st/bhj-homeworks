const button = document.querySelector(".dropdown");
const listItem = document.querySelectorAll(".dropdown__item");
const arrayListItem = [...listItem];

function clickButton() {
    button.children[1].classList.toggle("dropdown__list_active");
};

button.addEventListener("click", clickButton);

arrayListItem.forEach((item) => item.onclick = function() {
    button.click;
    button.children[0].textContent = item.textContent;
    return false;
});
