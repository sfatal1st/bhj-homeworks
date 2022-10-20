let sliderArrows = document.getElementsByClassName("slider__arrow");
let sliderItems = document.getElementsByClassName("slider__item");
let arraySliderItems = Array.from(sliderItems);
let sliderDots = document.getElementsByClassName("slider__dot");
let arraySliderDots = Array.from(sliderDots);
let numActive = 0;
let activationSlider = function(index) {
    arraySliderItems.forEach((item) => item.className = "slider__item");
    sliderItems[index].className = "slider__item slider__item_active";
    arraySliderDots.forEach((item) => item.className = "slider__dot");
    sliderDots[index].className = "slider__dot slider__dot_active";
}
sliderArrows[0].onclick = function() {
    numActive--;
    if (numActive < 0) {
        numActive = sliderItems.length - 1;
    } 
    activationSlider(numActive);
}
sliderArrows[1].onclick = function() {
    numActive++;
    if (numActive > (sliderItems.length - 1) ) {
        numActive = 0;
    } 
    activationSlider(numActive);
}
for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = function() {
        numActive = i;
        activationSlider(numActive);
    }
}