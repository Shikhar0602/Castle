const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgIMG

var engine, world;


function preload(){

bgIMG = loadImage("bg.png");

}



function setup(){
    var canvas = createCanvas(1600,1000);
    engine = Engine.create();
    world = engine.world;

    mainbody = new MainB();
    g = new Ground(800,1000,1600,20);

    outer1 = new Outer(425,300);
    outer2 = new Outer(1175,300);

    roof1 = new Roof(425,0,150,100);
    roof2 = new Roof(1175,0,150,100);

    roof3 = new RRoof(550,0,100,50);
    roof4 = new RRoof(650,0,100,50);
    roof5 = new RRoof(750,0,100,50);
    roof6 = new RRoof(850,0,100,50);
    roof7 = new RRoof(950,0,100,50);
    roof8 = new RRoof(1050,0,100,50);

    turret1 = new Turret(250,200);
    turret2 = new Turret(1350,200);

    roof9 = new RRoof(250,-50,200,100);
    roof10 = new RRoof(1350,-50,200,100);

    
    
   
}

function draw(){
    background(bgIMG);
    Engine.update(engine);
    mainbody.display();
    g.display();
    outer1.display();
    outer2.display();

    roof1.display();   
    roof2.display(); 
    roof3.display(); 
    roof4.display(); 
    roof5.display(); 
    roof6.display(); 
    roof7.display();
    roof8.display();

    turret1.display();
    turret2.display();
    
    roof9.display();
    roof10.display();

    
}