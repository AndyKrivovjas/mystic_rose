var rose;

function setup() {
  createCanvas(windowWidth, windowHeight);

  var x = width / 2;
  var y = height / 2;
  var r = 100;

  var minVal = (width < height) ? width : height;
  r = minVal * 0.9 / 2;
  rose = new Rose(x, y, r);
  // rose.setSlider(0, 30, 13);

  frameRate(2);
}

function draw() {
  background(51);
  rose.update();
  rose.show();
}
