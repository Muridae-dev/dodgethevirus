var castleBox;
var textBox;
var x = 0;
var u = 0;
var b = 0;
var rightAnswer;
var baconBox;
var eggsBox;
var isDown = false;
var mousePosition;
var offset = [0,0];
var baconRect;
var eggsRect;
var checkHover;

var tipText = [
    "NOT THAT, I LIKE A TYPICAL BREAKFAST",
    "I'LL GIVE YOU A HINT, WHAT I SEEK HAS TWO SOURCES OF PROTEIN",
    "NO! WHAT I WANT IS SALTY AND CRISPY",
    "AFTER A GOOD <span id='tip'>SCRAMBLE</span> I LIKE TO EAT LIKE A <span id='tip'>PIG</span>",
    "MAKE SURE THE COLOR IS MIXED YELLOW AND WHITE",
    "SOME CALL IT A DIRTY ANIMAL, I CALL IT A DELICIOUS SNACK",
    "ONE PART YELLOW, ONE PART RED AND BROWN"
    
]

//START FUNCTIONS
$(document).ready(function(){
    castleBox = document.getElementById("castleBox");
    $castleBox = $("#castleBox");
    $containerBox = $("#containerBox");
    textBox = document.getElementById("textBox");
    $textBox = $("#textBox");
    $textBox.hide();
    $castleBox.hide();
    $castleBox.fadeIn(2000, createText);
});
function createText () {
    $textBox.fadeIn();
    textBox.innerHTML = "WELL WELL SEEMS LIKE YOU GOT THIS FAR<br/><span id='tip'>(PRESS TEXT TO CONTINUE)</span>";
}

//CHANGING THE TEXT WHEN YOU CLICK ON THE DIALOGUE
function newText () {
    if(x == 0)textBox.innerHTML = "BUT NOW YOU FACE THE MOST DIFFICULT CHALLANGE OF ALL ";
    if(x == 1)textBox.innerHTML = "IN ORDER TO PROCEED YOU NEED TO GET PAST ME";
    if(x == 2)textBox.innerHTML = "AND I AM NOT EASILY DISTRACTED<br/> <br/>";
    if(x == 3)textBox.innerHTML = "ALTHOUGH MY STOMACH IS A LITTLE RUMBLY...";
    if(x == 4)textBox.innerHTML = "...YOU WILL NEVER GET PAST ME<br/><br/> ";
    if(x == 5)textBox.innerHTML = "<span id='textSpan'>(MAN SOME GOOD BREAKFAST WOULD BE NICE RIGHT ABOUT NOW)</span><br/><input type='text' id='inputBox'>", $("#inputBox").bind("keypress", {}, keypressInBox);
    if(x < 6)x++;
}


//PRESS ENTER WHEN IN THE INPUT BOX
function keypressInBox(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode                        
        e.preventDefault();
        rightAnswer = false;
        var input = document.getElementById("inputBox").value;
        var textSpan = document.getElementById("textSpan");
        if(input == "bacon")createFood("bacon"), rightAnswer = true;
        if(input == "eggs" || input == "egg" || input == "scrambled eggs")createFood("sceggs"), rightAnswer = true;
        if(rightAnswer == false)textSpan.innerHTML = tipText[b],b++;
        if(baconBox && eggsBox)textBox.innerHTML = "SEEMS LIKE YOU GOT IT, BUT ALONE THEY ARE NOTHING, TO PLEASE ME THEY NEED TO BE COMBINED";
        if(b == 6)b=0;
        document.getElementById("inputBox").value = "";
        
    }
};

//CREATE FOODBOXES AND ADD EVENTLISTENERS TO MOVE SAID BOXES
function createFood (food) {
    //CREATE NEW BOXES
    if(food == "bacon" && baconBox)baconBox.remove();
    if(food == "sceggs" && eggsBox)eggsBox.remove();
    var $newDiv = $('<div/>').attr('id', food + 'Box');
    if (food == "bacon")var xpos = 15;
    if (food == "sceggs")var xpos = 75;
    $newDiv.css({
        'height' : '15%',
        'width' : '10%',
        'position' : 'absolute',
        'left' : xpos + '%',
        'top' : '30%',
        'background' : 'url(../imgs/' + food + '.jpeg)',
        'background-size' : '100%',
        'background-repeat':'no-repeat'
    }).appendTo("#containerBox").html();

    //CREATE EVENTLISTENER FOR BACONBOX
    if(food=="bacon"){
        baconBox = document.getElementById("baconBox");
        baconBox.addEventListener('mousedown', function(e) {
            isDown = true;
            checkHover = "bacon";
            offset = [
                baconBox.offsetLeft - e.clientX,
                baconBox.offsetTop - e.clientY
            ];
        }, true);
    }
    //CREATE EVENTLISTENER FOR EGGSBOX
    if(food=="sceggs"){
        eggsBox = document.getElementById("sceggsBox");
        eggsBox.addEventListener('mousedown', function(e) {
            isDown = true;
            checkHover = "eggs";
            offset = [
                eggsBox.offsetLeft - e.clientX,
                eggsBox.offsetTop - e.clientY
            ];
        }, true);
    }

    //IF WE LET GO OFF MOUSE THEN MOUSEMOVE WONT RUN
    document.addEventListener('mouseup', function(){
        isDown = false;
        baconRect = baconBox.getBoundingClientRect();
        eggsRect = eggsBox.getBoundingClientRect();
        //CHECK IF THE TWO BOXES ARE ONTOP OF EACH OTHER (OVERLAPPING)
        if(baconRect.top <= eggsRect.top + 50 && baconRect.top >= eggsRect.top - 50 &&
            baconRect.left <= eggsRect.left + 50 && baconRect.left >= eggsRect.left - 50 && u == 0){
                baconBox.remove();
                eggsBox.remove();
                u = 1;
                baconEggs();
            }
    }, true);

    //IF WE ARE MOUSEDOWN OVER A FOODBOX THEN CHANGE POSITION TO MOUSE
    document.addEventListener('mousemove', function(){
        event.preventDefault();
        if(isDown) {
            mousePosition = {
                x : event.clientX,
                y : event.clientY
            };
            if(checkHover == "bacon"){
                baconBox.style.left = (mousePosition.x + offset[0]) + 'px';
                baconBox.style.top = (mousePosition.y + offset[1]) + 'px';
            }
            if(checkHover == "eggs"){
                eggsBox.style.left = (mousePosition.x + offset[0]) + 'px';
                eggsBox.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }
    })

}

function baconEggs() {

    var $newDiv = $('<div/>').attr('id', 'baconeggsBox');
    $newDiv.css({
        'height' : '25%',
        'width' : '25%',
        'position' : 'absolute',
        'left' :  '50%',
        'top' : '50%',
        'transform' : 'translate(-50%,-50%)',
        'background' : 'url(../imgs/baconeggs.jpeg)',
        'background-size' : '100%',
        'background-repeat':'no-repeat',
        'z-index' : '1'
    }).appendTo("#containerBox").html();
    textBox.innerHTML = "BACON AND EGGS!!<br/> HOW DID YOU KNOW MY WEAKNESS?!";
    changeDragon();
    setInterval(changeDragon, 800);

}

function changeDragon() {
    if(u == 3) u = 1;
    castleBox.style.backgroundImage = "url(../imgs/dragoncastlealt" + u + ".png";
    u++;
    setTimeout(gameWin, 4000);
}

function gameWin(){
    $containerBox.fadeOut(4000);
}