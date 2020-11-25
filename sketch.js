var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft,boxMiddle,boxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxLeft = createSprite(310,610,20,100)
	 boxLeft.shapeColor = color(255,0,0)

	 boxMiddle = createSprite(400,650,200,15)
	 boxMiddle.shapeColor = color(255,0,0)

	 boxRight = createSprite (510,610,20,100)
	 boxRight.shapeColor = color(255,0,0)

	World.add(world,boxLeft)
	World.add(world,boxMiddle)
	World.add(world,boxRight)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  /*box1.display();
  box2.display();
  box3.display();*/



  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	World.add(world, packageBody);
    
  }
}



