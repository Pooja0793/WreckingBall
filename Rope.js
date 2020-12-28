class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length: 200
        }
        this.body = Constraint.create(options);
        this.pointB=pointB;
        World.add(myworld,this.body);
    }

    display(){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;

        push();
        stroke(48, 22, 8);
      strokeWeight(3);
      line(posA.x,posA.y,posB.x,posB.y);
      pop();
    }
}