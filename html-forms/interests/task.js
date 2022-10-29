const checkbox = document.querySelectorAll(".interest__check");
const listCheckbox = [...checkbox];

listCheckbox.forEach((item) => item.addEventListener("change", () => {
    if (item.checked && !item.closest("ul.interests")) {
        for (let checkedItem of item.closest("li.interest").querySelectorAll(".interest__check")) {
            checkedItem.checked = true;
        }
    } else if (!item.checked && !item.closest("ul.interests")) {
        for (let checkedItem of item.closest("li.interest").querySelectorAll(".interest__check")) {
            checkedItem.checked = false;
        }
    }
}));