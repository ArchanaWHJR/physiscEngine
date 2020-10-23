const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options={
    isStatic : true
  }

  object = Bodies.rectangle(200,100,20,20,object_options);
  World.add(world,object);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,20,20) ;

//rect (200,200,30,30);
  drawSprites();
}