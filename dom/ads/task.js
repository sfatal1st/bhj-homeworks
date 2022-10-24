const rotator = document.querySelectorAll(".rotator__case");
const arrayRotator = [...rotator];
let index = 0;

setInterval(() => {
    if (index < rotator.length) {
        arrayRotator.forEach((item) => item.classList.remove("rotator__case_active"));
        arrayRotator[index].classList.add("rotator__case_active");
        arrayRotator[index].style.color = arrayRotator[index].getAttribute("data-color");
        index++;
    } else {
        index = 0;
    }
}, Number(arrayRotator[index].getAttribute("data-speed")));