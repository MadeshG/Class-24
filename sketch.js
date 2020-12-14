const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
var bird
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,700,50,50);
    box2 = new Box(1000,700,50,50);
    ground = new Ground(600,780,1200,10)
    pig1 = new Pig(900,700,40,40)
    log1 = new Log(900,650,300,PI/2 )
    box3 = new Box(800,600,50,50)
    box4 = new Box(1000,600,50,50)
    pig2 = new Pig(900,600,40,40)
    log2 = new Log(900,550,300,PI/2 )
    box5 = new Box(900,500,50,50)
    log3 = new Log(850,450,100,PI/5)
    log4 = new Log(950,450,100,PI/-5)
    bird = new Bird(200,200,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}