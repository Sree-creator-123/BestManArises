class Drops{
    constructor(x, y){

        var options = {
            restitution: 0.5,
            friction: 0.1
        }

        this.rain = Bodies.circle(x, y, 5, options);
        World.add(world, this.rain);
    }

    update() {
        if(this.rain.position.y > height) {
            Matter.rain.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)});
        }
    }

    display(){
        var pos = this.rain.position;

        push();
        ellipse(pos.x, pos.y, 5, 5);
        pop();
    }
}