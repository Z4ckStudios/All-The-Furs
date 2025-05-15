var PageLoaded = localStorage.getItem("PageLoaded");
localStorage.setItem("PageLoaded", "true");

if(PageLoaded == "true")
location.replace("index.html")

var FLAp1 = document.getElementById("FLAp1");
var FLTp1 = document.getElementById("FLTp1");

var FFBox1 = document.getElementById("FFBox1");
var FFBox2 = document.getElementById("FFBox2");
var FFBox3 = document.getElementById("FFBox3");
var FFBox4 = document.getElementById("FFBox4");
var FFBox5 = document.getElementById("FFBox5");

var FFCode1 = document.getElementById("FFCode1");
var FFCode2 = document.getElementById("FFCode2");
var FFCode3 = document.getElementById("FFCode3");
var FFCode4 = document.getElementById("FFCode4");
var FFCode5 = document.getElementById("FFCode5");

var HomeLink = document.getElementById("HomeLink");
var AboutLink = document.getElementById("AboutLink");
var InfoLink = document.getElementById("InfoLink");

var FFBoxes =
["/images/YoutubeLogo.png",     // 1
"/images/TwitterLogo.png",      // 2
"/images/TwitchLogo.png",       // 3
"/images/ATFLogo.png",          // 4
"/images/Z4ckLogo.png"];        // 5
var FFB = 5;

var FFNames =
["Youtube",             // 1
"Twitter",              // 2
"Twitch",               // 3
"AllTheFurs",           // 4
"Z4ck"];                // 5
var FFN = 5;

var Alist =
["@Ash050107",          // 1
"@AduflowOfficial",     // 2
"@Acey_wacey33",        // 3
"@Astra380",            // 4
"@Arctic1877645",       // 5
"@089_Abbott",          // 6
"@Autotek20",           // 7
"@ArtucunoDev",         // 8
"@Amelia194374",        // 9
"@AnotherArtistM8",     // 10
"@Alvalitheavali",      // 11
"@aekurmou",            // 12
"@AkwuewIso",           // 13
"@AprilFloofy",         // 14
"@Adamlikesbears"];     // 15
var a = 15;
a = a < Alist.length ? ++a : a - 15;

var Tlist =
["@TJ__Bunny",          // 1
"@TechoPuppy",          // 2
"@Theywu_",             // 3
"@thatonecubicguy",     // 4
"@ThatOneWicker",       // 5
"@Tonini08",            // 6
"@TundraSharks",        // 7
"@tsuny67",             // 8
"@TheWolfDude23",       // 9
"@TheRedOriginall",     // 10
"@TenebieUmbra",        // 11
"@T1000_Polyalloy",     // 12
"@thingyeaht"];         // 13
var t = 13;
t = t < Tlist.length ? ++t : t - 13;

var timer = 0;
const timerInterval = setInterval(timerInt, 500);

function timerInt() {
    timer++

    if(timer > 0)
    {FLAp1.innerHTML = "A - ";
    FLTp1.innerHTML = "T - ";
    
    a = a < Alist.length ? ++a : a - 15;
    a = a < Alist.length ? +a : a - 15;

    t = t < Tlist.length ? ++t : t - 13;
    t = t < Tlist.length ? +t : t - 13;

    FLAp1.innerHTML = FLAp1.innerHTML + "<code style='color: white'>" + Alist[a] + "</code>";
    FLTp1.innerHTML = FLTp1.innerHTML + "<code style='color: white'>" + Tlist[t] + "</code>";}
    
    if(timer > 1)
    {FLTp1.innerHTML = FLTp1.innerHTML}
}

FLAp1.innerHTML = FLAp1.innerHTML + "<code style='color: white'>" + Alist[a] + "</code>";
FLTp1.innerHTML = FLTp1.innerHTML + "<code style='color: white'>" + Tlist[t] + "</code>";

FFB = FFB < FFBoxes.length ? ++FFB : FFB - 5;
FFBox1.src = FFBoxes[FFB];
FFB = FFB < FFBoxes.length ? ++FFB : FFB - 4;
FFBox2.src = FFBoxes[FFB];
FFB = FFB < FFBoxes.length ? ++FFB : FFB - 3;
FFBox3.src = FFBoxes[FFB];
FFB = FFB < FFBoxes.length ? ++FFB : FFB - 2;
FFBox4.src = FFBoxes[FFB];
FFB = FFB < FFBoxes.length ? ++FFB : FFB - 1;
FFBox5.src = FFBoxes[FFB];

FFN = FFN < FFNames.length ? ++FFN : FFN - 5;
FFCode1.innerHTML = FFNames[FFN];
FFN = FFN < FFNames.length ? ++FFN : FFN - 4;
FFCode2.innerHTML = FFNames[FFN];
FFN = FFN < FFNames.length ? ++FFN : FFN - 3;
FFCode3.innerHTML = FFNames[FFN];
FFN = FFN < FFNames.length ? ++FFN : FFN - 2;
FFCode4.innerHTML = FFNames[FFN];
FFN = FFN < FFNames.length ? ++FFN : FFN - 1;
FFCode5.innerHTML = FFNames[FFN];

HomeLink.addEventListener("click",
function() {

    localStorage.setItem("CurrentPos", "Home");
    location.replace("index.html");
})
HomeLink.addEventListener("mouseover",
function() {

    HomeLink.style.cursor = "pointer";
    HomeLink.style.textDecoration = "underline";
})
HomeLink.addEventListener("mouseout",
function() {
    
    HomeLink.style.borderBottom = "none";
    HomeLink.style.textDecoration = "none";
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