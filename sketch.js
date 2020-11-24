
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	dustbinImage = loadImage('dustbingreen.png');
}


function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1100,585,150,15);
	dustbin2=new Dustbin(1185,500,15,170);
	dustbin3=new Dustbin(1015,500,15,170);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinImage,1000,410,200,200);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}

