var bgImg;
var cat;
function preload() {
    //load the images here
    bgImg = loadImage("cat4.png")
catimg1 = loadAnimation("images/cat1.png")
mouseimg1 = loadAnimation("images/mouse1.png")
catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom =createSprite(100,200);
jerry = createSprite(50,100);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    }
    
}
