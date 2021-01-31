var  a;
var backimg;
var b,bimg;
var boneimg;

function preload() {
  backimg=loadImage("bg.jpg")  
  bimg=loadAnimation("g.gif")
  boneimg=loadAnimation("b.gif")
}
function setup() {
    createCanvas(displayWidth,displayHeight-145)

    a=createSprite(600,200,100,100)
    a.addImage(backimg)
   

    b=createSprite(570,500,10,10)
    b.addAnimation("bimg",bimg);
    b.scale=1.0
    b.debug=true
    b.setCollider("rectangle",0,0,90,150)
}

function draw(){
    background(0)
a.velocityY=3.3
if(a.y>400){
  a.y=a.height/3
}
if(keyWentDown("right")){
  b.velocityX=4
}
 
if(keyWentUp("right")){
  b.velocityX=0
}

if(keyWentDown("left")){
  b.velocityX=-4
}
if(keyWentUp("left")){
  b.velocityX=-0
}
bone()
    drawSprites()
}

function bone(){
  if(frameCount%200===0){
    var rpo=random(450,800)
var b=createSprite(rpo,0,100,100)
b.addAnimation("b",boneimg)
b.scale=0.2
b.velocityY=4
b.debug=true
b.setCollider("rectangle",0,0,350,450)
b.lifetime=150
  }
}