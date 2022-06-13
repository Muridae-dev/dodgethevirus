var textBoxen;
var fishBox;


//RESETT POSITION WHENEVER WE LOAD THE PAGE
$(document).ready(function(){
    $(this).scrollTop(0);

    //GETTING ALL THE BOXES
    textBoxen = document.getElementById("textBox");
    fishBox = [document.getElementById("spermWhale"),
    document.querySelector("#giantSquid"),
    document.querySelector("#anglerFish"),
    document.querySelector("#glandShark"),
    document.querySelector("#bfinSquid"),
    document.querySelector("#nzoth"),
    document.querySelector("#cthulu"),
    document.querySelector("#chinaBox")];
});




//WHEN WE SCROLL WE RUN THIS FUNCTION
$(window).scroll(function () {
const scrollTop = $(window).scrollTop();
const documentHeight = $(document).height();
const windowHeight = $(window).height();
const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;



const $box = $('#gurkyBox');

if(scrollTop <= 200) {
    textBoxen.style.display = "block";
    textBoxen.style.height = "20%";
    textBoxen.style.width = "20%";
    textBoxen.innerHTML = "Hello and welcome to my page (SCROLL TO CONTINUE)";
}
if(scrollTop > 200 && scrollTop < 1500) textBoxen.style.display = "none";


//ADDING TEXT TO ALL FISHES WHEN THEY SHOW ON THE SCREEN
//SPERM WHALE
if(isInViewport(fishBox[0]) == true) {
    textBoxen.style.display = "block";
    textBoxen.style.height = "40%";
    textBoxen.style.width = "40%";
    textBoxen.innerHTML = "Only comes for squid, might blow our your eardrum";
}
//GIANT SQUID
if(isInViewport(fishBox[1]) == true) {
    textBoxen.innerHTML = "MASSIVE mate, don't fuck with him";
}
//ANGLER FISH
if(isInViewport(fishBox[2]) == true) {
    textBoxen.innerHTML = "My brother from another mother, drank less milk than me";
}
//GREENLAND SHARK
if(isInViewport(fishBox[3]) == true) {
    textBoxen.innerHTML = "Seems like he's high all the time";
}
//BIG FIN SQUID
if(isInViewport(fishBox[4]) == true) {
    textBoxen.innerHTML = "They say whats seen cannot be unseen";
}
//NZOTH
if(isInViewport(fishBox[5]) == true) {
    textBoxen.innerHTML = "Oops, wrong (sea)floor"
}
//CTHULU
if(isInViewport(fishBox[6]) == true) {
    textBoxen.innerHTML = "Always asleep, heavy snorer";
}
//CHINA
if(isInViewport(fishBox[7]) == true) {
    textBoxen.innerHTML = "Guess you ended up on the other side";
}

growAnimation($box, scrollPercent);

});

function growAnimation($element, animationPercentage) {

    //SPEED OF THE RESIZING
    const animationDecimal = animationPercentage / 10;

    const startingPositionPercent = 50;
    const finishSizePercent = 40;
    const finishPositionPercentx = 15;
    const finishPositionPercenty = 20;

    //MATH TO CHANGE THE VALUE ACCORDINGLY
    const currentSizePercent = getProgressFromTo(80, finishSizePercent, animationDecimal);
    const currentPositionPercentx = getProgressFromTo(startingPositionPercent, finishPositionPercentx, animationDecimal);
    const currentPositionPercenty = getProgressFromTo(startingPositionPercent, finishPositionPercenty, animationDecimal);


    if(currentSizePercent > 30) {
        $element.css({
            width: `${currentSizePercent}%`,
            height: `${currentSizePercent}%`,
            top: `${currentPositionPercenty}%`,
            left: `${currentPositionPercentx}%`,
        });
    }

    else {
        $element.css({
            width: "30%",
            height: "30%"
        })
    }
}

//MATH TO CHANGE THE VALUE ACCORDINGLY
function getProgressFromTo(from, to, animationDecimal) {
    return from + (to - from) * animationDecimal;
}

//CHECK IF ONE OF THE BOXES ARE VISIBLE ON SCREEN
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}