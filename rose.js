function Rose(x, y, r) {
  this.x = x;
  this.y = y;
  this.radius = r;

  this.slider;
  this.increment = 1;
  this.nodesCount = 5;
  this.nodes = [];
}

Rose.prototype.setSlider = function(min, max, dt) {
  this.slider = createSlider(min, max, dt);
}

Rose.prototype.update = function() {
  this.nodes = [];
  // this.nodesCount = this.slider.value();
  if(this.nodesCount === 25) {
    this.increment = -1;
  } else if(this.nodesCount === 5) {
    this.increment = 1;
  }
  this.nodesCount += this.increment;

  var step = 2 * PI / this.nodesCount;
  for(let angle = 0; angle < 2 * PI; angle += step) {
    var x = this.x + this.radius * cos(angle);
    var y = this.y + this.radius * sin(angle);

    var pt = createVector(x, y);
    this.nodes.push(pt);
  }
}

Rose.prototype.show = function() {
  var self = this;

  push();
  noFill();
  stroke(255);
  ellipse(this.x, this.y, this.radius * 2);
  pop();

  push();
  strokeWeight(10);
  stroke(255);
  self.nodes.forEach(function(pt) {
    point(pt.x, pt.y);

    push();
    strokeWeight(1);
    self.nodes.forEach(function(another) {
      if(another !== pt) {
        line(pt.x, pt.y, another.x, another.y);
      }
    });
    pop();
  });
  pop();
}
