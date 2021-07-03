var ship,ship_moving
var sea,sea_moving




function preload(){
sea = loadImage("sea.png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
createCanvas(400,400);
sea_moving = createSprite(400,200,20,150);
sea_moving.x =sea_moving.width/8
sea_moving.addImage("myship",sea);
sea_moving.scale = 0.3;
sea_moving.velocityX = -2;
ship_moving = createSprite(100,200,20,50);
ship_moving.addAnimation("my_ship",ship);
ship_moving.scale = 0.2
}

function draw() {
background("black");

console.log(sea_moving.x)

 if(sea_moving.x < 0){
sea_moving.x = sea_moving.width/8
 }
drawSprites();
 
}
  







