var balloon,balloonImage;
var backgroundImage;

function preload(){

balloonImage=loadImage("Images/B1.png")
backgroundImage=loadImage("Images/backGround.png")

}

function setup() {
  createCanvas(1000,400);
 
 balloon=createSprite(400, 200, 50, 50);
 balloon.addImage(balloonImage)
 balloon.scale=0.5;

 
}

function draw() {
  background(backgroundImage);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }

  drawSprites();
}