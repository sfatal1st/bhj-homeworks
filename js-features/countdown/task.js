const countDown = function(){
    const timer = document.getElementById("timer");    
    var timeArr = timer.textContent.split(":");
    var secCount = Number(timeArr[0]) * 3600 + Number(timeArr[1]) * 60 + Number(timeArr[2]);
    secCount -= 1;
    if (secCount === 0) {
        window.alert("Вы победили в конкурсе!");
        location.reload();
    }
    var hour, minutes, seconds;
    var hourCount = Math.floor(secCount / 3600);
    var minutesCount = Math.floor((secCount - (hourCount * 3600))/ 60);
    var secondsCount = (Math.floor(secCount - (hourCount * 3600) - (minutesCount * 60)) % 60)
    if (hourCount < 10) {
        hour = '0' + hourCount;
    } else {
        hour = hourCount;
    }
    if (minutesCount < 10) {
        minutes = '0' + minutesCount;
    } else {
        minutes = minutesCount;
    }
    if (secondsCount < 10) {
        seconds = '0' + secondsCount;
    } else {
        seconds = secondsCount;
    }
    timer.textContent = hour + ':' + minutes + ':' + seconds;
}
setInterval(countDown, 1000);