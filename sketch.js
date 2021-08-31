
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var groundObj ;
var leftGround , rightGround ;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

    var ball_options = {
		isStatic : false ,
		restitution : 0.3 ,
		friction : 0 , 
		density : 1.2 
	}
	ball = Matter.Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

    groundObj = new ground(700,670,1500,20);
    leftGround = new ground(1100,600,20,120);
	rightGround = new ground(1350,600,20,120);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40);
  groundObj.display();
  leftGround.display();
  rightGround.display();
  
}

function keyPressed (){
   if(keyCode==UP_ARROW){
	   Matter.Body.applyForce(ball,ball.position,{x:85 , y:-85})
   }
}



