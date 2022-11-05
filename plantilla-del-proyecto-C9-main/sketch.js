
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  fill("black")
  textSize(20)
  text("Presiona las flechas del teclado para ", 30, 90);
  text("cambiar el color del fondo", 60, 110);
  text("y WASD para cambiar el del cubo", 60, 130);
  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  if (keyDown("d") || keyDown("D"))
  {
    if (box.shapeColor != "red"){
      box.shapeColor = "red"
    }
  }
  if (keyDown("a") || keyDown("A"))
  {
    if (box.shapeColor != "blue"){
      box.shapeColor = "blue"
    }
  }
  if (keyDown("w") || keyDown("W"))
  {
    if (box.shapeColor != "yellow"){
      box.shapeColor = "yellow"
    }
  }
  if (keyDown("s") || keyDown("S"))
  {
    if (box.shapeColor != "green"){
      box.shapeColor = "green"
    }
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

