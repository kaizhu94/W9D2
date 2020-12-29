const Util = require("./util");
const MovingObject = require("./moving_object");

const DEFAULT = {
    COLOR: "blue",
    RADIUS: 15,
    VEL: 5,
};

function Asteroid(object) {
    object.color = DEFAULT.COLOR;
    object.radius = DEFAULT.RADIUS;
    object.vel = Util.randomVec(DEFAULT.VEL);
    MovingObject.call(this, object);
 }
Util.inherits(Asteroid,MovingObject);


module.exports = Asteroid;
