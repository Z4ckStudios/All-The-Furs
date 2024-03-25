var body = document.querySelector("body");

var FurLi1 = document.querySelector(".FurLi1");
var FurLi2 = document.querySelector(".FurLi2");
var FurLi3 = document.querySelector(".FurLi3");
var FurLi4 = document.querySelector(".FurLi4");
var FurLi5 = document.querySelector(".FurLi5");
var FurLi6 = document.querySelector(".FurLi6");
var FurLi7 = document.querySelector(".FurLi7");
var FurLi8 = document.querySelector(".FurLi8");
var FurLi9 = document.querySelector(".FurLi9");
var FurLi10 = document.querySelector(".FurLi10");

var FurName = document.querySelector(".FurName");
var FursSocials = document.querySelector(".FursSocials");

var FurDesc = document.querySelector(".FurDesc");

var YTLogo = document.querySelector(".YTLogo");
var TwitchLogo = document.querySelector(".TwitchLogo");
var TwitterLogo = document.querySelector(".TwitterLogo");

YTLogo.href = "";
TwitchLogo.href = "";
TwitterLogo.href = "";

var currentFur = "Fur Name";

YTOuter = YTLogo.outerHTML;
TwitchOuter = TwitchLogo.outerHTML;
TwitterOuter = TwitterLogo.outerHTML;

if(YTLogo.href == "#")
{YTOuter = "";}
if(TwitchLogo.href == "#")
{TwitchOuter = "";}
if(TwitterLogo.href == "#")
{TwitterOuter = "";}

FurName.innerHTML = currentFur;
FursSocials.innerHTML = currentFur + "'s" + " " + "Socials:" + " " + YTOuter + " " + TwitchOuter + " " + TwitterOuter;

FurDesc.innerHTML = "";

if(FurLi1.innerHTML == "1")
{FurLi1.style.color = "rgb(15, 10, 50)";}
if(FurLi2.innerHTML == "1")
{FurLi2.style.color = "rgb(15, 10, 50)";}
if(FurLi3.innerHTML == "1")
{FurLi3.style.color = "rgb(15, 10, 50)";}
if(FurLi4.innerHTML == "1")
{FurLi4.style.color = "rgb(15, 10, 50)";}
if(FurLi5.innerHTML == "1")
{FurLi5.style.color = "rgb(15, 10, 50)";}
if(FurLi6.innerHTML == "1")
{FurLi6.style.color = "rgb(15, 10, 50)";}
if(FurLi7.innerHTML == "1")
{FurLi7.style.color = "rgb(15, 10, 50)";}
if(FurLi8.innerHTML == "1")
{FurLi8.style.color = "rgb(15, 10, 50)";}
if(FurLi9.innerHTML == "1")
{FurLi9.style.color = "rgb(15, 10, 50)";}
if(FurLi10.innerHTML == "1")
{FurLi10.style.color = "rgb(15, 10, 50)";}

document.querySelector(".YTLogo").addEventListener("click",
function() {

    location.replace(YTLogo.href);
})
document.querySelector(".TwitchLogo").addEventListener("click",
function() {

    location.replace(TwitchLogo.href);
})
document.querySelector(".TwitterLogo").addEventListener("click",
function() {

    location.replace(TwitterLogo.href);
})