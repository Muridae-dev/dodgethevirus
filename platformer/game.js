const context = document.querySelector("canvas").getContext("2d");

context.canvas.height =  800;
context.canvas.width = 1220;
var speed = 0.5;

const square = {

    height:32,
    width:32,
    jumping:true,
    x:0,
    xVelocity: 0,
    y:0,
    yVelocity: 0
};

const controller = {
    left:false,
    right:false,
    up: false,

    keyListener: function (event) {
        let key_state = (event.type == "keydown") ? true : false;
        let key_state_release = (event.type == "keyup") ? true : false;

        switch (event.keyCode) {
            case 37: //left arrow
                controller.left = key_state;
                break;
            case 38 && 32:
                controller.up = key_state;
                break;
            case 39:
                controller.right = key_state;
                break;
            case 16:
                if(key_state == true) speed = 1;
                if(key_state_release == true) speed = 0.5;
                break;

        }
    }

};


const loop = function () {
    //om vi trycker på uppknappen och inte redan hoppar, hoppar vi
    if (controller.up && square.jumping == false) {
        square.yVelocity -= 35;
        square.jumping = true;
    }
    //om vi trycker på vänster rör vi oss vänster
    if (controller.left == true) {
        square.xVelocity -= speed;
    }
    //om vi trycker på höger rör vi oss höger
    if (controller.right == true) {
        square.xVelocity += speed;
    }

    square.yVelocity += 1.5; //gravity
    square.x += square.xVelocity; //move on x axis
    square.y += square.yVelocity; //move on y axis
    square.xVelocity *= 0.9; //friction
    square.yVelocity *= 0.9; //friction

    //if square falls to the ground then stop it
    if (square.y > 786 - 16 - 32) {
        square.jumping = false;
        square.y = 786 -  16 - 32;
        square.yVelocity = 0;
    }

    //if square gets on the platform

    //1
    //context.moveTo(600, 650);
    //context.lineTo(700, 650);
    if ((square.y > 650 - 16 - 32 && square.y < 650 - 16) && (square.x > 600-32 && square.x < 700) && square.yVelocity > 0) {
        
        square.jumping = false;
        square.y = 650 - 16 - 32;
        square.yVelocity = 0;
    }

    //2
    //context.moveTo(800, 550);
    //context.lineTo(1220, 550);
    if ((square.y > 550 - 16 - 32 && square.y < 550 - 16) && (square.x > 800-32 && square.x < 1220) && square.yVelocity > 0) {
        
        square.jumping = false;
        square.y = 550 - 16 - 32;
        square.yVelocity = 0;
    }

    //3 
    context.moveTo(700, 400);
    context.lineTo(500, 400);
    if ((square.y > 400 - 16 - 32 && square.y < 400 - 16) && (square.x > 500-32 && square.x < 700) && square.yVelocity > 0) {
        
        square.jumping = false;
        square.y = 400 - 16 - 32;
        square.yVelocity = 0;
    }

    //4
    //context.moveTo(120, 230);
    //context.lineTo(520, 230);
    if ((square.y > 230 - 16 - 32 && square.y < 230 - 16) && (square.x > 120-32 && square.x < 520) && square.yVelocity > 0) {
        
        square.jumping = false;
        square.y = 230 - 16 - 32;
        square.yVelocity = 0;
    }

    //5
    //context.moveTo(700,150);
    //context.lineTo(1220, 150); 
    if ((square.y > 150 - 16 - 32 && square.y < 150 - 16) && (square.x > 700-32 && square.x < 1220) && square.yVelocity > 0) {
        
        square.jumping = false;
        square.y = 150 - 16 - 32;
        square.yVelocity = 0;
    }

    //IF WE GET TO THE GOAL THEN RESET POSITION
    if(square.y == 150 - 16 - 32 && (square.x > 1160 && square.x < 1220)) {
        square.x = 0;
        square.y = 0;
        switchPage(13);
    }

    //SO WE CANT JUMP WHEN DROPPING FROM A PLATFROM
    if (square.yVelocity > 0) {square.jumping = true;}

    if (square.x < -20) {
        square.x = 1220;
    }
    if (square.x > 1220){
        square.x = -20;
    }

    //CREATES BACKDROP FOR EACH FRAME
    context.fillStyle = "#201A23"; //fyller färg i bakgrunden?
    context.fillRect(0,0,1220,800); //x, y, width, height

    //CREATES PLAYER FOR EACH FRAME 
    context.fillStyle = "#8DAA9D";
    context.beginPath();
    context.rect(square.x, square.y, square.width, square.height);
    context.fill();

    //CREATE GOAL
    context.fillStyle = "#FFFFFF";
    context.beginPath();
    context.rect(1180, 100, 32, 32);
    context.fill();

    //CREATES GROUND 1ST TIME
    context.strokeStyle = "2E2532";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(0, 785);
    context.lineTo(1220,785);

    //CREATE PLATFORMS
    //1
    context.moveTo(600, 650);
    context.lineTo(700, 650);
    //2 
    context.moveTo(800, 550);
    context.lineTo(1220, 550);
    //3 
    context.moveTo(700, 400);
    context.lineTo(500, 400);
    //4
    context.moveTo(120, 230);
    context.lineTo(520, 230);
    //5
    context.moveTo(700,150);
    context.lineTo(1220, 150);


    context.stroke();


    window.requestAnimationFrame(loop);
}


window.addEventListener("keydown" , controller.keyListener)
window.addEventListener("keyup" , controller.keyListener);
window.requestAnimationFrame(loop);

