class Block{
    constructor(x, y, width,height) {
      var options = {
        // 'isStatic' : false,
        // 'density':0.5,
        'friction': 0.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y,width, height, options);
     this.width = width;
      this.height = height;
    //  this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
     var bodypos = this.body.position;
      push();
      translate(bodypos.x,bodypos.y);
      rotate(angle);
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }