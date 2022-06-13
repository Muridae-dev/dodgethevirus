let xTheo = 0.1;
function zoomIn (){
    if(xTheo < 0.8)xTheo+=0.1;
    document.getElementById("scaleTainer").style.transform = "scale(" + xTheo + ")";
}

function zoomOut (){
    if(xTheo>=0.2) xTheo-=0.1;
    document.getElementById("scaleTainer").style.transform = "scale(" + xTheo + ")";
}