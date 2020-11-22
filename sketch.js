const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var pinkImg, blueImg, purpleImg, orangeImg, greenImg, backgroundImg, pandaImg;
var pink, blue, purple, orange, green, background, panda;

function preload(){
    pinkImg = loadImage("pink bubble.png");
    blueImg = loadImage("blue bubble.png");
    purpleImg = loadImage("purple bubble.jpg");
    orangeImg = loadImage("orange bubble.png");
    greenImg = loadImage("green bubble.png");
    backgroundImg = loadImage("background.jpg");
    pandaImg = loadImage("panda.jpg");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    pink = createSprite(200,200,10,10);
    pink.addImage(pinkImg);
    pink.scale = 0.09;
    
    blue = createSprite(100,200,10,10);
    blue.addImage(blueImg);
    blue.scale = 0.09;

    purple = createSprite(150,200,10,10);
    purple.addImage(purpleImg);
    purple.scale = 0.09;

    orange = createSprite(250,200,10,10);
    orange.addImage(orangeImg);
    orange.scale = 0.09;

    green = createSprite(300,200,10,10);
    green.addImage(greenImg);
    green.scale = 0.09;

    panda = createSprite(350,200,10,10);
    panda.addImage(pandaImg);
    panda.scale = 0.09;
}

function draw(){
    background(0);
    Engine.update(engine);

    drawSprites();
}