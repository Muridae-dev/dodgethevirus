var x = 2;
var pumpBox1 = document.getElementById("pumpkinBox1");
var shakeTimer;
var skeletonTimer;
var y = 0;
var z = 0;
var skeletonX = 0;
var skeletonY = 0;
var dootingStars = new Audio;
console.log("hellooo");
function spinFaster() {
    x -= 0.2
    if(x < 0.4) x = 2;
    document.getElementById("festerBox").style.animationDuration = `${x}s`;

}

//LEFT PUMPKIN BOX
$(".pumpkinBox1").hover(function(){
    $(this).addClass("active");
    shakeIt();
    shakeTimer = setInterval(shakeIt, 400);
}, function(){
    $(this).removeClass("active");
    clearTimeout(shakeTimer);
    $(this).css({transform:"rotate(-30deg)"});
});

    function shakeIt(){
        y++;
        if(y == 1){
            document.querySelector(".pumpkinBox1").style.transform = "rotate(-40deg)"
        }
        if(y == 2){
            document.querySelector(".pumpkinBox1").style.transform = "rotate(-10deg)"
            y = 0;
        }
        console.log("ran");
    }

//RIGHT PUMPKIN BOX
$(".pumpkinBox2").hover(function(){
    $(this).addClass("active");
    shakeIt2();
    shakeTimer = setInterval(shakeIt2, 400);
}, function(){
    $(this).removeClass("active");
    clearTimeout(shakeTimer);
    $(this).css({transform:"30deg", left:"70%"});
});


    function shakeIt2(){
        y++;
        if(y == 1){
            $(".pumpkinBox2").css({transform:"rotate(40deg)", left:"60%"})
        }
        if(y == 2){
            $(".pumpkinBox2").css({transform:"rotate(10deg)", left:"60%"})
            y = 0;
        }
    }

//TEXT COLOR CHANGE
$("#textBox").hover(function(){
    colorChange();
    shakeTimer = setInterval(colorChange, 100);
}, function(){
    clearTimeout(shakeTimer);
});

    function colorChange() {
        var r = Math.round(Math.random()*255);
        var b = Math.round(Math.random()*255);
        var g = Math.round(Math.random()*255);
        

        $("#textBox").css({color:`rgb(${r},${b},${g} )`});
        
    }


function createSkeletons() {
    //DOOTS WHEN YOU CREATE SKELETAL
    var doot = new Audio("../sounds/doot.mp3");
    doot.play();

    //CREATING NEW SKELETONBOX
    var containerBox = document.getElementById("containerBox");
    var newDiv = document.createElement("div");
    newDiv.className = "skeletonBox";
    newDiv.style.cssText = `top:${skeletonY}%;left:${skeletonX}%;`;
    containerBox.appendChild(newDiv);

    //CHANGING THE POSITION AND PLAYING MUSIC
    skeletonX += 10;
    if(skeletonX >= 100 && skeletonY <= 100) skeletonX = 0, skeletonY += 20;
    if(skeletonY == 40 && z == 0) {z++;dootingStars = new Audio("../sounds/dootingstars.mp3"); dootingStars.play();}
    if(skeletonY >= 100 && z == 0) {alert("this page is already to spooky");}
}