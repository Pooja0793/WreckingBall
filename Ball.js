class Ball{
    constructor(x,y,r){
        var options={
            density: 1,
            frictionAir:0.004
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        fill("orange");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
    }
}