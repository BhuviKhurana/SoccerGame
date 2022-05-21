var player;
var goal;
var ball;
var bg;

// other players
// ball sprite movable
// bg pic

function preload(){
bg=loadImage("21095964(1).jpg");
}
function setup(){
  createCanvas(windowWidth,700)
  
player=createSprite(500,350,100,100)


goal=createSprite(265,490,300,100);

ball=createSprite(625,390,50,50)

}
function draw (){
  background(bg);
  //text(mouseX+ ","+mouseY, mouseX,mouseY);
  console.log(mouseX,mouseY);
if (keyIsDown(RIGHT_ARROW)){
    player.x+=10;
}
if (keyIsDown(LEFT_ARROW)){;
  player.x-=10
}
if (keyIsDown(DOWN_ARROW)){
  player.y+=10
}
if (keyIsDown(UP_ARROW)){
  player.y-=10
}

  drawSprites();

}