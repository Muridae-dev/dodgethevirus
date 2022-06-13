var pos_x = 0;
var pos_y = 0;
var n = 0;
var miniRuta = [];
var z = 0;
var myVar;
//LADDAR IN NY PLOCKRUTA
function createFirstDiv() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    let dv1 = document.getElementById("miniRuta");
    let parentDiv = dv1.parentNode;
    parentDiv.insertBefore(newDiv, null);
    
    let newX_pos = getRandomPos(27);
    let newY_pos = getRandomPos(27);

    newDiv.style.height = "25px";
    newDiv.style.width = "25px";
    newDiv.style.background = "red";
    newDiv.style.marginTop = newY_pos + "px";
    newDiv.style.marginLeft = newX_pos + "px";
    newDiv.style.position = "absolute";
    dv1.style.marginTop = "0px";
    dv1.style.marginLeft = "0px";

};
//SKAPAR RANDOM POSITION FÖR PLOCKRUTA
function getRandomPos(max) {
    return Math.floor(Math.random() * Math.floor(max)) * 25;
}

//SKAPAR RANDOM FÄRG FÖR PLOCKRUTA
function getRandomColor(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//FUNKTIONEN SOM RÖR ORMEN MED TIMER
function moveSnake() {
    var rutan = document.getElementById("miniRuta");
    //NER
    if(z === 0) {
        if(pos_y < 700){
            for(var i = n-1; i > -1; i--)
            {
                if(i===0) {
                    document.getElementById("miniNew" + i).style.marginLeft = rutan.style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = rutan.style.marginTop;
                }
                if(i!=0){
                    document.getElementById("miniNew" + i).style.marginLeft = document.getElementById("miniNew" + (i-1)).style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = document.getElementById("miniNew" + (i-1)).style.marginTop;
                }
            }
            pos_y += 25;
            rutan.style.marginTop = pos_y + "px";
        }
    }

    //UP
    if (z === 1) {
        if(pos_y >= 0){
            for(var i = n-1; i > -1; i--)
            {
                if(i===0) {
                    document.getElementById("miniNew" + i).style.marginLeft = rutan.style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = rutan.style.marginTop;
                }
                if(i!=0){
                    document.getElementById("miniNew" + i).style.marginLeft = document.getElementById("miniNew" + (i-1)).style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = document.getElementById("miniNew" + (i-1)).style.marginTop;
                }
            }
            pos_y -= 25;
            rutan.style.marginTop = pos_y + "px";
        }
    }

    //HÖGER
    if (z === 2) {
        if(pos_x < 700){
            for(var i = n-1; i > -1; i--)
            {
                if(i===0) {
                    document.getElementById("miniNew" + i).style.marginLeft = rutan.style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = rutan.style.marginTop;
                }
                if(i!=0){
                    document.getElementById("miniNew" + i).style.marginLeft = document.getElementById("miniNew" + (i-1)).style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = document.getElementById("miniNew" + (i-1)).style.marginTop;
                }
            }
            pos_x += 25;
            rutan.style.marginLeft = pos_x + "px";
        }
    }

    //VÄNSTER
    if(z === 3) {
        if(pos_x >= 0){
            for(var i = n-1; i > -1; i--)
            {
                if(i===0) {
                    document.getElementById("miniNew" + i).style.marginLeft = rutan.style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = rutan.style.marginTop;
                }
                if(i!=0){
                    document.getElementById("miniNew" + i).style.marginLeft = document.getElementById("miniNew" + (i-1)).style.marginLeft;
                    document.getElementById("miniNew" + i).style.marginTop = document.getElementById("miniNew" + (i-1)).style.marginTop;
                }
            }
            pos_x -= 25;
            rutan.style.marginLeft = pos_x + "px";
        }
    }

    //SKAPA NY RUTA NÄR MAN TAR PLOCKRUTA
    if(rutan.style.marginTop === newDiv.style.marginTop && rutan.style.marginLeft === newDiv.style.marginLeft) {
        document.getElementById("newDiv").remove();
        createDiv();
    }

    //GAMEOVER OM MAN NUDDAR SIG SJÄLV
    if(n > 0) {
        for(var i = 0; i < n; i++){
            if(rutan.style.marginTop === document.getElementById("miniNew" + i).style.marginTop && rutan.style.marginLeft === document.getElementById("miniNew" + i).style.marginLeft){
                console.log(rutan.style.marginTop);
                console.log(document.getElementById("miniNew" + i).style.marginTop);
                gameOver();
            }

        }
    }

    if(pos_x < 0 || pos_x > 675 || pos_y < 0 || pos_y > 675) gameOver();
}

//KEYPRESS FUNKTIONERNA
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    
    switch (event.key) {
        //NER
        case "Down":
        case "ArrowDown":
            if(z!=1)z = 0;
            break;

        //UPP
        case "Up":
        case "ArrowUp":
            if(z!=0)z = 1;
            break;

        //HÖGER
        case "Right":
        case "ArrowRight":
            if(z!=3)z = 2;
            break;

        //VÄNSTER
        case "Left":
        case "ArrowLeft":
            if(z!=2)z = 3;
            break;
        default:
        return;
    }

    event.preventDefault();

}, true);

//SKAPAR NY PLOCKRUTA/SVANS
function createDiv() {
    
    //SKAPAR NY PLOCKRUTA
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    let dv1 = document.getElementById("miniRuta");
    let parentDiv = dv1.parentNode;
    parentDiv.insertBefore(newDiv, null);
    
    


    //SKAPAR SVANS
    miniRuta[n] = document.createElement("div");
    miniRuta[n].setAttribute("id", "miniNew" + n);
    parentDiv.insertBefore(miniRuta[n], null);

    //OM VI PLOCKAR VÅRAN FÖRSTA RUTA
    if(n === 0) {
        miniRuta[n].style.marginLeft = dv1.style.marginLeft + 1;
        miniRuta[n].style.marginTop = dv1.style.marginTop;

        let newX_pos = getRandomPos(27);
        let newY_pos = getRandomPos(27);

        newDiv.style.marginTop = newY_pos + "px";
        newDiv.style.marginLeft = newX_pos + "px";
        
    }

    //OM VI REDAN PLOCKAT RUTOR
    if(n!=0){
        miniRuta[n].style.marginLeft = miniRuta[(n-1)].style.marginLeft;
        miniRuta[n].style.marginTop = miniRuta[(n-1)].style.marginTop;

        let newX_pos = getRandomPos(27);
        let newY_pos = getRandomPos(27);

        newDiv.style.marginTop = newY_pos + "px";
        newDiv.style.marginLeft = newX_pos + "px";

        //NOSPAWN PÅ TAIL
        for(var i = 0; i <= n; i++){
            if(newDiv.style.marginTop === miniRuta[i].style.marginTop && newDiv.style.marginLeft === miniRuta[i].style.marginLeft) {
                newX_pos = getRandomPos(27);
                newY_pos = getRandomPos(27);

                newDiv.style.marginTop = newY_pos + "px";
                newDiv.style.marginLeft = newX_pos + "px";
                i = 0;
            }
        }
    }

    //POSITIONERING
    miniRuta[n].style.height = "25px";
    miniRuta[n].style.width = "25px";
    miniRuta[n].style.background = "rgb(" + getRandomColor(255)+ "," + getRandomColor(255)+ "," + getRandomColor(255)+ ")";
    miniRuta[n].style.position = "absolute";
    miniRuta[n].style.transition = "margin 110ms";
    n++;

    if(n == 10) { switchPage(14); clearInterval(myVar)}

    document.getElementById("snakeScoreRuta").innerHTML = "SCORE: " + n;

};

//STARTA SPELET
function runGame() {
    
    myVar = setInterval(moveSnake, 100);
    createFirstDiv();
    document.getElementById("textIntro").remove();
    document.getElementById("snakeScoreRuta").innerHTML = "SCORE: " + n;
}

//GAMEOVER FUNCTION
function gameOver() {
    for(var i = 0; i < n; i++) {
        document.getElementById("miniNew" + i).remove();
    }
    document.getElementById("miniRuta").style.marginLeft = "0px";
    document.getElementById("miniRuta").style.marginTop = "0px";
    pos_x = 0;
    pos_y = 0;
    z = 0;
    document.getElementById("newDiv").remove();

    var elem = document.createElement("div");
    elem.setAttribute("id", "textIntro");
    document.body.appendChild(elem);
    
    clearInterval(myVar);
    n = 0;

    document.getElementById("textIntro").onclick = runGame;
    document.getElementById("textIntro").innerHTML = "GAME OVER";

}