let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let valueC = 255;
let xPos;
let apples = 1;
let trailX = new Array(apples);
let trailY = new Array(apples);
let rep = 0
let xPosApple = 100;
let yPosApple = 100;
//canvas width and height
let canvasWidth = 500;
let canvasHeight = 550;

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  background(255);
  xPos = 500;
  yPos = 100;

}


function draw() {
  fill(150);
  rect(0,0,canvasWidth,canvasHeight);
  if (keyIsDown(LEFT_ARROW)) {
      xPos -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
      xPos += 5;
  }
  if (keyIsDown(UP_ARROW)) {
      yPos -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yPos += 5;
  }
  if (yPos > canvasHeight){
      yPos = 0;
    }
  else if (yPos < 0){
    yPos = canvasHeight
  }
  if(rep >= 2)
  {
    for(i = trailX.length-1; i >= 0; i--){
      trailX[i] = trailX[i-1]
      
    }
    trailX[0] = xPos;
    for(i = trailY.length-1; i >= 0; i--){
      trailY[i] = trailY[i-1]
    }
    trailY[0] = yPos;
    
    rep = 0
  }
  else
  {
    rep++
  }
  fill(0, 200, 0)
  for(i = trailX.length-1; i >= 0; i--){

    ellipse(trailX[i], trailY[i], 25, 25);
  }
  ellipse(xPos, yPos, 30, 30)

    if(xPos+30 > xPosApple && xPos-30 < xPosApple)
    {
      if(yPos+30 > yPosApple && yPos-30 < yPosApple)
      {
        xPosApple = Math.floor(Math.random() * (canvasWidth - 30)) + 30;
        yPosApple = Math.floor(Math.random() * (canvasHeight - 30)) + 30;
        apples++
        trailX.push(xPos)
        trailY.push(yPos)
      }
    }
  if(xPos < 0){
    xPos +=5
  }
  if(yPos < 2){
    yPos +=5
  }
  if(xPos > 1200){
    xPos -=5
  }
  if(yPos > 549){
    yPos -=5
  }
  fill(255, 0, 0)
  ellipse(xPosApple, yPosApple, 30, 30)
  if(mouseIsPressed)
  {

      xPos = mouseX
      yPos = mouseY

  }
  fill(200)
  textSize(30);
  text("Score: "+ apples, canvasWidth/2-30, 50); 
}
