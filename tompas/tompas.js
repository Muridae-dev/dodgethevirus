var x = 0;
var y = 0;

var smallBox1;
var smallBox2;
var smallBox3;
var smallBox4;

var innersmallBox1;
var innersmallBox2;
var innersmallBox3;
var innersmallBox4;


$(document).ready(function() {
    $("#containerBox").hide();
    $("#containerBox").fadeIn(1500);

    smallBox1 = document.getElementById("smallBox1");
    smallBox2 = document.getElementById("smallBox2");
    smallBox3 = document.getElementById("smallBox3");
    smallBox4 = document.getElementById("smallBox4");

    innersmallBox1 = document.getElementById("innersmallBox1");
    innersmallBox2 = document.getElementById("innersmallBox2");
    innersmallBox3 = document.getElementById("innersmallBox3");
    innersmallBox4 = document.getElementById("innersmallBox4");
});

function moveBox(x) {
    for (var i = 1; i <= 4; i++) {
        var elementet = document.getElementById("smallBox" + i);
        var elementet2 = document.getElementById("innersmallBox" + i)
        if(elementet.classList.contains("active") == true && i != x) { elementet.classList.remove("active");elementet2.classList.remove("active");}
    }


    if(x == 1) smallBox1.classList.toggle("active"), innersmallBox1.classList.toggle("active"), console.log(x);
    if(x == 2) smallBox2.classList.toggle("active"), innersmallBox2.classList.toggle("active"), console.log(x);
    if(x == 3) smallBox3.classList.toggle("active"), innersmallBox3.classList.toggle("active"), console.log(x);
    if(x == 4) smallBox4.classList.toggle("active"), innersmallBox4.classList.toggle("active");


}
