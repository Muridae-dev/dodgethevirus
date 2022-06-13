var catfishBox;
var abborreBox;
var gaddaBox;
var garBox;

var catfishPic;
var abborrePic;
var gaddaPic;
var garPic;

var cartCatfish;
var cartAbborre;
var cartGadda;
var cartGar;

var cart;
var cartText;
var cartItems;
var cartAmount = 0;

var itemCatfish = '            <div class="item">                <img src="../imgs/fishies/catfish.jpeg" style="width:auto; height:100%; float:left;">                <div class="itemText" id="iT1">                    AMOUNT: <br/>                    PRICE/ITEM:                 </div>            </div>';
var itemAbborre = '            <div class="item">                <img src="../imgs/fishies/abborre.jpeg" style="width:auto; height:100%; float:left;">                <div class="itemText" id="iT4">                    AMOUNT: <br/>                    PRICE/ITEM:                 </div>            </div>';
var itemGadda = '            <div class="item">                <img src="../imgs/fishies/gadda.jpeg" style="width:auto; height:100%; float:left;">                <div class="itemText" id="iT3">                    AMOUNT: <br/>                    PRICE/ITEM:                 </div>            </div>';
var itemGar = '            <div class="item">                <img src="../imgs/fishies/alligatorGar.jpeg" style="width:auto; height:90%; float:left;">                <div class="itemText" id="iT2">                    AMOUNT: <br/>                    PRICE/ITEM:                 </div>            </div>';

var amountCatfish = 0;
var amountAbborre = 0;
var amountGadda = 0;
var amountGar = 0;

var costCatfish = 499;
var costAbborre = 149;
var costGadda = 349;
var costGar = 899;

$(document).ready (function(){
    catfishBox = document.getElementById("catfish");
    abborreBox = document.getElementById("abborre");
    garBox = document.getElementById("alligatorGar");
    gaddaBox = document.getElementById("gadda");

    catfishPic = document.getElementById("catfishPic");
    abborrePic = document.getElementById("abborrePic");
    gaddaPic = document.getElementById("gaddaPic");
    garPic = document.getElementById("garPic");

    cartCatfish = document.getElementById("cartCatfish");
    cartAbborre = document.getElementById("cartAbborre");
    cartGadda = document.getElementById("cartGadda");
    cartGar = document.getElementById("cartGar");

    cart = document.getElementById("cart");
    cartText = document.getElementById("cartText");
    cartItems = document.getElementById("cartItems");
})

document.addEventListener('mousemove', function() {
    if(catfishBox.matches(':hover')) {
        catfishPic.classList.add('blur');
        cartCatfish.classList.add('active');
    }
    else catfishPic.classList.remove('blur'), cartCatfish.classList.remove('active');;

    if(abborreBox.matches(':hover')) abborrePic.classList.add('blur'), cartAbborre.classList.add('active');
    else abborrePic.classList.remove('blur'), cartAbborre.classList.remove('active');

    if(gaddaBox.matches(':hover')) gaddaPic.classList.add('blur'), cartGadda.classList.add('active');
    else gaddaPic.classList.remove('blur'), cartGadda.classList.remove('active');

    if(garBox.matches(':hover')) garPic.classList.add('blur'), cartGar.classList.add('active');
    else garPic.classList.remove('blur'), cartGar.classList.remove('active');

    if(cart.matches(':hover') || cartItems.matches(':hover'))cartItems.classList.add("active");
    else cartItems.classList.remove('active');


    
})

function addCart(e) {
    cartAmount++;
    cartText.innerHTML = "CART (" + cartAmount + ")";
    if(e == 1) {
        if(!document.getElementById("iT1"))cartItems.innerHTML += itemCatfish;
        amountCatfish++;
        document.getElementById("iT1").innerHTML = `AMOUNT:${amountCatfish}<br/>PRICE/ITEM:${costCatfish}`;
    }
    

    if(e == 2) {
        if(!document.getElementById("iT2"))cartItems.innerHTML += itemGar;
        amountGar++;
        document.getElementById("iT2").innerHTML = `AMOUNT:${amountGar}<br/>PRICE/ITEM:${costGar}`;
    }

    if(e == 3) {
        if(!document.getElementById("iT3"))cartItems.innerHTML += itemGadda;
        amountGadda++;
        document.getElementById("iT3").innerHTML = `AMOUNT:${amountGadda}<br/>PRICE/ITEM:${costGadda}`;
    }

    if(e == 4) {
        if(!document.getElementById("iT4"))cartItems.innerHTML += itemAbborre;
        amountAbborre++;
        document.getElementById("iT4").innerHTML = `AMOUNT:${amountAbborre}<br/>PRICE/ITEM:${costAbborre}`;
    }

}