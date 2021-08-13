//array = [x,y,velocity,mass,height]
let block_1;
let block_2;
let collisions;
function setup() {
  createCanvas(1500, 400);
  block_1 = new Block(200,1,0,50);
  block_2 = new Block(450,100,-1,200);
  collisions = 0;
}

function draw() {
  background(220);
  block_1.collision(block_2);
  block_1.collide_wall();
  block_1.update();
  block_2.update();
  fill(255);
  block_1.display();
  block_2.display();
  textSize(32);
  fill(0)
  text(collisions, 10,50);
  
}

