var logoBox;
var picBox;
var jBox;
var textBox;
var textBox2;
var sp1;
var sp2;
var picBox2;


$(document).ready(function() {
    logoBox = document.querySelector('.logoBox');
    picBox = document.querySelector('#picBox');
    jBox = document.querySelector('.jBox1');
    textBox = document.getElementById('textBox');
    textBox2 = document.getElementById('tx2');
    sp1 = document.getElementById('sp1');
    sp2 = document.getElementById('sp2');
    picBox2 = document.getElementById('picBox2');

    console.log("ran the function")
    

    let options = {
        threshold:0.8
    }
    
    let observer = new IntersectionObserver(function (entries) {
        if(entries[0].isIntersecting) {
            entries[0].target.classList.add('inview');
        }
        else {
            entries[0].target.classList.remove('inview');
        }
    }, options);
    
        observer.observe(logoBox);
        observer.observe(jBox);

    
    
});

function removeEventListener() {
    document.removeEventListener('mousemove', theListener());
    switchPage(5);
}

function theListener() {
    if(logoBox.matches(':hover'))textBox.innerHTML = "VISIT US AT KALLEANKAGATAN FOR BOOKING<br/>CHECK OUT OUR SPONSORS BELOW", picBox.classList.add('blur');
    else textBox.innerHTML = "BOOK YOUR CLASSES HERE", picBox.classList.remove('blur');
    if(jBox.matches(':hover')) sp1.classList.add('active'), sp2.classList.add('active'), tx2.classList.remove('active'), picBox2.classList.add('blur');
    else sp1.classList.remove('active'), sp2.classList.remove('active'), tx2.classList.add('active'), picBox2.classList.remove('blur');
    
}

document.addEventListener('mousemove', theListener());