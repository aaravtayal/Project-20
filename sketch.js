var car;
var wall;
var speed;
var weight;
var deformation;

function setup()
 {
  createCanvas(800,400);
 
  //creating car and giving random velocity
  wall = createSprite(650,200,70,height/2);
 
  speed = Math.round(random(55,100));
  weight = Math.round(random(400,1500));
  //creating wall for colliding with car
  car = createSprite(50,200,60,40);
  car.shapeColor = color(500,500);
  car.velocityX = speed;


}



function draw() {
  background(10,10,10); 

  car.depth = wall.depth;
  wall.depth = wall.depth+1;

  collide();

  drawSprites();
   }

function collide ()
{
if (wall.x-car.x < (car.width+wall.width)/2)
   {
      car.velocityX=0;
      deformation = 0.5 * weight * speed * speed/22500;
      console.log(deformation)

      if(deformation>180)
       {
          car.shapeColor=color(225,0,0);
       }
 
      if(deformation<180) 
       {
          car.shapecolor=color(230,230,0);
       }

       if(deformation>100)
        {
           car.shapeColor=color(230,230,0)
        }
 
      if(deformation<100)
       {
          car.shapeColor=color(0,225,0);
       }
 
   }
 
}



