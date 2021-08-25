
var sea = createsprite (300, 200);
var shipImg;
var seaImg;

function preload(){
seaImg = loadAnimation("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
}
sea.addImage(seaImg);

function setup(){
  createCanvas(600,400);
}



function draw() {

}