const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var engine,world,obj,ball;

function setup() {
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    var obj_options = {
        isStatic:true
    }
    obj = Bodies.rectangle(300,590,600,20,obj_options);
    
    World.add(world,obj);
    var ball_options =  {
        restitution:3
    }
    ball = Bodies.ellipse(300,100,30,30,ball_options);
    World.add(world,ball);

    
}
function draw() {
rectMode(CENTER);    
rect(300,300,100,50)
Engine.update(engine);
console.log(obj);
rect(obj.position.x,obj.position.y,600,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30);
}