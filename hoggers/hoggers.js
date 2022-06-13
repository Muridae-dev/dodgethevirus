var x = 0;
var timern;

function createBox() {
    var pos_x = Math.floor(Math.random() * 69);
    var pos_y = Math.floor(Math.random() * 66);
    document.getElementById("containerBox").innerHTML += `<div class="popupBox" style="top:${pos_y}%; left:${pos_x}%; text-align:center;"> <img src="../imgs/hogger.png" style="height:100%;"></div>`;
    x++;
    if (x == 50) {clearTimeout(timern); alert("du e torsk"); //window.location.href="../main.html"
    };
}

function startInterval() {
    timern = setInterval(createBox, 50);
}

$(document).ready(startInterval());