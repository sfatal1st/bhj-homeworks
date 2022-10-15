const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");
const time = document.getElementById("clicker__time");
var first = true;
cookie.onclick = function() {
    counter.textContent = Number(counter.textContent) + 1;
    if (first) {
        first = false;
        start = Date.now();
    } else {
        end = Date.now();
        speed.textContent = ((end - start) / Number(counter.textContent)).toFixed(2);
        time.textContent = Math.floor(end / 1000) - Math.floor(start / 1000)
    }
    cookie.width = 250;
    setTimeout(function() {
        cookie.width = 200;
    }, 100);
}