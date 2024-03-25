var body = document.querySelector("body");

let indexTimer = 0;
const indexTimerInterval = setInterval(indexTimerInt, 1000);

function indexTimerInt() {
    indexTimer++

    if(indexTimer > 2) {location.replace("ATF.html");}
}