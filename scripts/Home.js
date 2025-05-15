var PageLoaded = localStorage.getItem("PageLoaded");
localStorage.setItem("PageLoaded", "true");

if(PageLoaded == "true")
location.replace("index.html")

var OZSTwitterL1 = document.getElementById("OZSTwitterL1");
var OWoN_Com = document.getElementById("OWoN_Com");
var OZSTwitterL2 = document.getElementById("OZSTwitterL2");

var FurName = document.getElementById("FurName");
var FursSocials = document.getElementById("FursSocials");

var FurDesc = document.getElementById("FurDesc");

var YTLogo = document.getElementById("YTLogo");
var TwitchLogo = document.getElementById("TwitchLogo");
var TwitterLogo = document.getElementById("TwitterLogo");

var WikiLink = document.getElementById("WikiLink");
var AboutLink = document.getElementById("AboutLink");
var InfoLink = document.getElementById("InfoLink");

YTLogo.href = "";
TwitchLogo.href = "";
TwitterLogo.href = "";

var currentFur = "Fur Name";
var ExcludeKey = "ExFromView";

YTOuter = YTLogo.outerHTML;
TwitchOuter = TwitchLogo.outerHTML;
TwitterOuter = TwitterLogo.outerHTML;

localStorage.setItem("CurrentPos", "Home");

if(YTLogo.href == "#")
{YTOuter = "";}
if(TwitchLogo.href == "#")
{TwitchOuter = "";}
if(TwitterLogo.href == "#")
{TwitterOuter = "";}

FurName.innerHTML = currentFur;
FursSocials.innerHTML = currentFur + "'s" + " " + "Socials:" + " " + YTOuter + " " + TwitchOuter + " " + TwitterOuter;

FurDesc.innerHTML = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

YTLogo.addEventListener("click",
function() {

    window.open(YTLogo.href);
})
YTLogo.addEventListener("mouseover",
function() {

    YTLogo.style.cursor = "pointer";
})

TwitchLogo.addEventListener("click",
function() {

    window.open(TwitchLogo.href);
})
TwitchLogo.addEventListener("mouseover",
function() {

    TwitchLogo.style.cursor = "pointer";
})

TwitterLogo.addEventListener("click",
function() {

    window.open(TwitterLogo.href);
})
TwitterLogo.addEventListener("mouseover",
function() {

    TwitterLogo.style.cursor = "pointer";
})

WikiLink.addEventListener("click",
function() {

    localStorage.setItem("CurrentPos", "Wiki");
    location.replace("index.html");
})
WikiLink.addEventListener("mouseover",
function() {

    WikiLink.style.cursor = "pointer";
    WikiLink.style.textDecoration = "underline";
})
WikiLink.addEventListener("mouseout",
function() {
    
    WikiLink.style.borderBottom = "none";
    WikiLink.style.textDecoration = "none";
})

AboutLink.addEventListener("mouseover",
function() {

    AboutLink.style.cursor = "pointer";
    AboutLink.style.textDecoration = "underline";
})
AboutLink.addEventListener("mouseout",
function() {

    AboutLink.style.borderBottom = "none";
    AboutLink.style.textDecoration = "none";
})

InfoLink.addEventListener("mouseover",
function() {

    InfoLink.style.cursor = "pointer";
    InfoLink.style.textDecoration = "underline";
})
InfoLink.addEventListener("mouseout",
function() {

    InfoLink.style.borderBottom = "none";
    InfoLink.style.textDecoration = "none";
})

OZSTwitterL1.addEventListener("click",
function() {

    window.open("https://twitter.com/Z4ckStudios");
})
OZSTwitterL1.addEventListener("mouseover",
function() {

    OZSTwitterL1.style.cursor = "pointer";
})

OWoN_Com.addEventListener("click",
function() {

    window.open("https://wheelofnames.com");
})
OWoN_Com.addEventListener("mouseover",
function() {

    OWoN_Com.style.cursor = "pointer";
})

OZSTwitterL2.addEventListener("click",
function() {

    window.open("https://twitter.com/Z4ckStudios");
})
OZSTwitterL2.addEventListener("mouseover",
function() {

    OZSTwitterL2.style.cursor = "pointer";
})