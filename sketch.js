var box1, box2;
function setup() 

{

box1 = new Box (200, 200, 50, 50, 0, 2, 'lightpink');
box2 = new Box (200, 50, 70, 10, 0, -2, 'lightblue');


  createCanvas(400, 400);
}

function draw() 
{
  background(220);

  box1.show()
  box1.moveup()
  box2.show()
  box2.moveup()

}

