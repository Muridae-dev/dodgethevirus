var pigBox;
var timern;
var timerCheck = 0;

var squeal = new Audio('../sounds/pigpissd.mp3');
var bear = new Audio('../sounds/bear.mp3');
var frog = new Audio('../sounds/frog.mp3');
var hog = new Audio('../sounds/shocked.mp3');
var moose = new Audio('../sounds/moose.mp3');
var hogger = new Audio('../sounds/doomhogger.mp3');
var alert = new Audio('../sounds/alert.mp3');

//WHEN DOCUMENT LOADS RUN CREATE BOX FUNCTION
//$(document).ready(setPositions);

//CREATE BOX FUNCTION
function setPositions(){
    if(timerCheck == 1) {var poof = new Audio('../sounds/poof.wav');
     poof.play();}

    document.getElementById("containerBox").innerHTML = "";
    //DEFINE SIZE AND AMOUNT OF TILES
    var tilesizeX = Math.floor(($("#containerBox").innerWidth()/10)), tilesizeY = Math.floor(($("#containerBox").innerHeight()/10)), tilecount = 6;
    var gRows = Math.floor($("#containerBox").innerWidth()/tilesizeX);
    var gCols = Math.floor($("#containerBox").innerHeight()/tilesizeY);

    //AMOUNT OF BOXES AND GIVE A RANDOM TILE POSITION
    var vals = _.shuffle(_.range(tilecount));
    var xpos = _.shuffle(_.range(gRows));
    var ypos = _.shuffle(_.range(gCols));

    //FOR EACH TILECOUNT CREATE NEW DIV WITH UNIQUE POSITIONS
    _.each(vals, function(i){
        var $newDiv = $('<div/>').addClass("boxar");
        $($newDiv).attr('id', 'box'+i);
        if(i == 0) $($newDiv).attr('onmouseover', 'bearHover()'), $($newDiv).attr('onclick', 'clickBox(0)');
        if(i == 1) $($newDiv).attr('onmouseover', 'pigHover()'), $($newDiv).attr('onclick', 'clickBox(1)');
        if(i == 2) $($newDiv).attr('onmouseover', 'hoggerHover()'), $($newDiv).attr('onclick', 'clickBox(2)');
        if(i == 3) $($newDiv).attr('onmouseover', 'frogHover()'), $($newDiv).attr('onclick', 'clickBox(3)');
        if(i == 4) $($newDiv).attr('onmouseover', 'mooseHover()'), $($newDiv).attr('onclick', 'clickBox(4)');
        if(i == 5) $($newDiv).attr('onmouseover', 'hogHover()'), $($newDiv).attr('onclick', 'clickBox(5)');
        $newDiv.css({
            'position' : 'absolute',
            'left':(xpos[i] * (tilesizeX/17)) + '%',
            'top':(ypos[i] * (tilesizeY/10)) + '%',
            'background-image':'url(../imgs/ftp/pic' + i + '.png)',
            'background-size':'100%',
            'background-repeat':'no-repeat'
        }).appendTo("#containerBox").html();
    });
    timerCheck = 0;
}

//HOVER FUNCTIONS
    //HOVER THE BEAR
    function bearHover() {
        bear.play();
    }

    //HOVER THE PIG
    function pigHover() {
        alert.play();
        squeal.play();
        
        document.getElementById("box1").innerHTML = "";
        var $exDiv = $('<div/>');
        $exDiv.css({
            'position':'aboslute',
            'height':'20%',
            'width':'20%',
            'background':'red'
        }).appendTo("#box1").html();
        if(timerCheck == 0)timern = setTimeout(setPositions, 800), timerCheck = 1;
    }

    //HOVER THE HOGGER
    function hoggerHover() {
        hogger.play();
    }

    //HOVER THE FROG
    function frogHover() {
        frog.play();
    }

    //HOVER THE MOOSE
    function mooseHover() {
        moose.play();
    }

    //HOVER THE HOG
    function hogHover() {
        hog.play();
    }

//CLICK FUNCTIONS
function clickBox(u) {
    console.log(u)
    if (document.contains(document.getElementById("textBox")) && u != 1)document.getElementById("textBox").remove();
    if(u != 1) {
        var $textBox = $('<div/>');
        $($textBox).attr('id', 'textBox');
        timern2 = setTimeout(removeText, 1500);
    }
    //BEAR
    if(u==0)$textBox.text("THAT IS A BEAR");
    //PIG
    if(u==1)clearTimeout(timern) ,document.removeEventListener('mousemove',update), document.removeEventListener('touchmove',update), switchPage(12);
    //HOGGER
    if(u==2)$textBox.text("THATS A HOGGER");
    //FROG
    if(u==3)$textBox.text("THATS A FROG");
    //MOOSE
    if(u==4)$textBox.text("THATS A MOOSE");
    //HOG
    if(u==5)$textBox.text("HAH! THAT'S A HOG NOT A PIG");
    
    
    $textBox.appendTo("#containerBox").html();
}

//REMOVE TEXT
function removeText() {
    document.getElementById("textBox").remove();
}

//MAKES THE LIGHT MOVE WITH MOUSE
function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')

  }
  
  document.addEventListener('mousemove',update);
  document.addEventListener('touchmove',update);