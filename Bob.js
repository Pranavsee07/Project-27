class Bob {
    constructor(x, y,r) {
     
        var options ={
         isStatic:false,
         restitution:1.3,
         friction:0,
         density:7.8,
        }
      this.body = Bodies.circle(x, y, r,options);
      this.radius = r;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
   rectMode(CENTER);
      fill(255,20,147);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }