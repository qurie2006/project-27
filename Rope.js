class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);

    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var line1X = pointA.x;
        var line1Y = pointA.y;
 
        var line2X = pointB.x + this.offsetX;
        var line2Y = pointB.y + this.offsetY;

        strokeWeight(2);
        stroke(167, 160, 164);

        line(line1X, line1Y, line2X, line2Y);
    }
}  
