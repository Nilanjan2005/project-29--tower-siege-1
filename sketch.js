
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var Base;
var block1,block2,block3,block4,block5,block6,block7;

var block8,block9,block10,block11,block12;

var block13,block14,block15;

var block16;

var blockA,blockB,blockC,blockD,blockE;
var blockF,blockG,blockH;
var blockI;

var slingShot;
var polygon,poly_Img;

function preload(){
poly_Img = loadImage("polygon.png")
}
function setup(){
createCanvas(1000,600)
engine = Engine.create();
world = engine.world;

ground1 = new Ground(700,460,300,20);
ground2 = new Ground(610,228,160,20);
Base = new Ground(500,550,1000,30);

block1 = new Block(620,430,30,40);
block2 = new Block(650,430,30,40);
block3 = new Block(680,430,30,40);
block4 = new Block(710,430,30,40);
block5 = new Block(740,430,30,40);
block6 = new Block(770,430,30,40);
block7 = new Block(800,430,30,40);

block8 = new Block(650,390,30,40)
block9 = new Block(680,390,30,40);
block10 = new Block(710,390,30,40);
block11 = new Block(740,390,30,40);
block12 = new Block(770,390,30,40);

block13 = new Block(680,350,30,40);
block14 = new Block(710,350,30,40);
block15 = new Block(740,350,30,40);

block16 = new Block(710,310,30,40);

blockA = new Block(570,205,20,25);
blockB = new Block(590,205,20,25);
blockC = new Block(610,205,20,25);
blockD = new Block(630,205,20,25);
blockE = new Block(650,205,20,25);

blockF = new Block(590,180,20,25);
blockG = new Block(610,180,20,25);
blockH = new Block(630,180,20,25);

blockI =  new Block(610,152,20,30)

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200})
}
function draw(){
    background("cyan");
    Engine.update(engine);

    ground1.display();
    ground2.display();

    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

fill("skyblue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("palegreen")
    block13.display();
    block14.display();
    block15.display();

    fill("silver")
    block16.display();
    
    fill("orange")
    blockA.display();
    blockB.display();
    blockC.display();
    blockD.display();
    blockE.display();

    fill("gold")
    blockF.display();
    blockG.display();
    blockH.display();

    fill("yellow")
    blockI.display();

    Base.display();

    imageMode(CENTER)

    var pos = polygon.position;
    image(poly_Img,pos.x,pos.y,40,40);
   
    slingShot.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly();
}
