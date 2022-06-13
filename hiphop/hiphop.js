var song = new Audio;
var scratch = new Audio;
var y = 0;


function playSong (x) {
    song.pause();
    if(x == 1) song = new Audio('../sounds/hypnotize.mp3');
    if(x == 2) song = new Audio('../sounds/gimmetheloot.mp3');
    if(x == 3) song = new Audio('../sounds/juicy.mp3');
    if(x == 4) song = new Audio('../sounds/1970somethin.mp3');
    if(x == 5) song = new Audio('../sounds/gatdamn.mp3');
    if(x == 6) song = new Audio('../sounds/deathrow.mp3')
    if(x == 7) song = new Audio('../sounds/bigbossrabbit.mp3');
    if(x == 8) song = new Audio('../sounds/babyshit.mp3');
    
    song.play();
} 

function switchRapper() {
    for (var i = 1;i <= 4; i++){
            document.getElementById("button" + i).classList.toggle("inactive");
            document.getElementById("button" + i + "F").classList.toggle("active");
    }


    document.getElementById("hpicBox").classList.toggle("inactive");
    document.getElementById("hpicBoxFreddie").classList.toggle("active");

}

function moveMurky() {
    document.getElementById("murkyBox").classList.toggle("active");
}

document.addEventListener('keyup', (e) => {
    if (e.code === "KeyA") switchRapper();
    if (e.code === "Space") {song.pause(); scratch = new Audio('../sounds/stop.wav'); scratch.play(); }
    if (e.code === "KeyM") moveMurky();
  });