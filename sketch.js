var bullet,wall;
var speed,weight,thickness;
var bullet,wall;

function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

bullet = createSprite(50,200,40,5);
bullet.shapeColor = "white";
bullet.velocityX = speed;

  wall = createSprite(700,200,thickness,height/2);
}

function draw() {
  background("black");
  

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
 

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
   
   var damage=0.5 * speed * weight * speed/(thickness *thickness *thickness)
   console.log(damage);
   if (damage>10)
  {
      wall.shapeColor=color("red");
  }
  
  if(damage<10)
  {
    wall.shapeColor = color("green");
  }
  }
  drawSprites();
}

function hasCollided(bullet, wall)
{
     bulletRightEdge=bullet.x +bullet.width;
     wallLeftEdge=wall.x;
     if (bulletRightEdge>=wallLeftEdge)
     {
         return true
     }
     return false;
    }
