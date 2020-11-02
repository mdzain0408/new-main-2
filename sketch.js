
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,boy1,sling,stone1;
var groundSprite;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 700);

   groundSprite = createSprite(0,0,1200,10);
  groundSprite.shapeColor = color(0)

  engine = Engine.create();
  world = engine.world;
  
  
  ground = Bodies.rectangle(600,695,1200,20,{isStatic:true});
  World.add(world, ground);
  
 

	

  m1 = new mango(847,167);
  m2 = new mango(966,237);
  m3 = new mango(937,82);
  m4 = new mango(935,147);
  m5 = new mango(797,237);
  m6 = new mango(1024,203);
  m7 = new mango(864,243);
  m8 = new mango(1050,269);

	tree1 = new tree();
	boy1 = new boy();
	stone1 = new stone(217,560)
	
  sling = new thro(stone1.body,{x:217,y:560})
  
  Engine.run(engine);
  
}


function draw() {


	Engine.update(engine);

  rectMode(CENTER);
  background("white");

  groundSprite.x = ground.position.x;
  groundSprite.y = ground.position.y;
  tree1.display();
  boy1.display();
  stone1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

 
  isTouching(stone1.body,m1.body)
  isTouching(stone1.body,m2.body)
  isTouching(stone1.body,m3.body)
  isTouching(stone1.body,m4.body)
  isTouching(stone1.body,m5.body)
  isTouching(stone1.body,m6.body)
  isTouching(stone1.body,m7.body)
  isTouching(stone1.body,m8.body)
  

  sling.display();


textSize(15)
text("Press space to get a chance",50,30)


  drawSprites();
 
}


function mouseDragged(){

Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){

if (keyCode === 32){
  Matter.Body.setPosition(stone1.body,{x:217,y:560})
  sling.attach(stone1.body)
       

}


}

function isTouching(object,object2)
{

  if (object.x - object2.x < object2.width/2 + object.width/2
    && object2.x - object.x < object2.width/2 + object.width/2
    && object.y - object2.y < object2.height/2 + object.height/2
    && object2.y - object.y < object2.height/2 + object.height/2) {


      m1.shot();
      m2.shot();
      m3.shot();
      m4.shot();
      m5.shot();
      m6.shot();
      m7.shot();
      m8.shot();
    
}
}

