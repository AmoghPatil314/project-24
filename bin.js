class binWall {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(500,600,20,100);
      rect(700,600,20,100);
      pop();
    }
  };
  