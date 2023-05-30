
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255);

    fill(255,0,0)
    circle(200, 230, 220)

    fill(0,128,0)
    circle(900, 230, 220)

    fill(0,0,255)
    circle(200, 530, 220)

    noFill()
    stroke((0,0,0))
    strokeWeight(3)
    circle(900, 530, 220)
  }