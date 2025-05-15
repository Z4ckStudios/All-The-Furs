var CurrentPos = localStorage.getItem("CurrentPos");
localStorage.setItem("PageLoaded", "false");

let indexTimer = 0;
const indexTimerInterval = setInterval(indexTimerInt, 1000);

function indexTimerInt() {
    indexTimer++

    if(indexTimer > 2)
    {if(CurrentPos == null, "Home")
    {location.replace("Home.html");}

    if(CurrentPos == "Wiki")
    {location.replace("Wiki.html");}}
}