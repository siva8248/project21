var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,15);
 thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 *weight *speed *speed/(thickness* thickness* thickness);
    if(damage>10){
    wall.shapeColor = "red";
    }
    if(damage<10){
    wall.shapeColor = "green";
    }
  }
  drawSprites();
  hasCollided(bullet, wall);
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.X;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  { return true; }
  return false; 
}