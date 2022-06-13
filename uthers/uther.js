function fadeFunc() {
    $("#utherBox").hide().fadeIn(2000);
    
    console.log(document.getElementById("utherBox"))
}

$(document).ready(fadeFunc())