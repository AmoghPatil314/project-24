
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var wall1,wall2,wall3;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,600,800,20);
	
	paper=new Ball(80,80,1);

	wall1=new binWall(500,600,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  wall1.display();

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{ x: 1, y: -1});
  }

	/*if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{ x: 1, y: 0});
		}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{ x: -1, y: 0});
	}*/
	

  drawSprites();
 
}