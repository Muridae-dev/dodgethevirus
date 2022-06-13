var terrorBoxar = [];
var x = 0;
var intervallen;
var pos_x = -5;

function createBox(){

    if(x < 5) {
        document.getElementById("containerBox").innerHTML += `<div id="terrorBoxar${x}"style="position:absolute;top:50%;transform: translate(0%, -50%); left:${pos_x}%; height:80%;"><img src="../imgs/occult2.png" style="height:100%; width:auto;"></div>`;
        terrorBoxar[x] = document.getElementById("terrorBoxar" + x);
        pos_x+=20;

    }   
    if(x == 5) {
        document.getElementById("containerBox").innerHTML = "";

    }
    if (x == 6) {
        document.getElementById("containerBox").innerHTML = '<div id="bigTerrorBox"style="height:200%;margin:auto;margin-top:-40%; text-align:center;"><img src="../imgs/occult2.png" style="height:100%; width:auto;"></div>'

    }
    if (x == 7) {

    }
    if (x == 8) {
        clearInterval(intervallen);
        intervallen = setInterval(createBox,10);
    }
    if (x > 8) {
        pos_x = Math.floor(Math.random() * 69);
        pos_y = Math.floor(Math.random() * 66);
        document.getElementById("containerBox").innerHTML += `<div id="terrorBoxar${x}"style="position:absolute;top:${pos_y}%;transform: translate(0%, -50%); left:${pos_x}%; height:80%;"><img src="../imgs/occult2.png" style="height:100%; width:auto;"></div>`;

    }
    if (x >= 100) { clearInterval(intervallen)}
    x++;
}

function createTimer() {
    intervallen = setInterval(createBox,1000);
}

$(document).ready(createTimer());