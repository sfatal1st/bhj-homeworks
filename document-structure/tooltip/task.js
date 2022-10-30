const hasTitle = document.querySelectorAll(".has-tooltip");
const listHasTitle = [...hasTitle];

listHasTitle.forEach((item) => item.addEventListener("click", () => {
    const {left, bottom} = item.getBoundingClientRect();
    let deleteTooltip = document.getElementsByClassName("tooltip")[0];
    const div = document.createElement("div");
    div.classList.add("tooltip");
    div.classList.add("tooltip_active");
    div.innerText = item.title;
    div.style.left = String(left) + "px";
    div.style.top = String(bottom) + "px";
    if (deleteTooltip) {
        deleteTooltip.remove();
    }
    item.insertAdjacentElement("afterEnd", div);
    
    event.preventDefault();
}))