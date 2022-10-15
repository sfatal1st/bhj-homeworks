const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            if (Number(dead.textContent) > 9)  {
                window.alert("Победа!");
                location.reload();
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (Number(lost.textContent) > 4)  {
                window.alert("Поражение!");
                location.reload();
            }
        }  
    }
}