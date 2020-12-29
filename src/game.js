const Asteroid = require("./asteroid.js");
function Game() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function (){
    while(this.asteroids.length < Game.NUM_ASTEROIDS){
        this.asteroids.push(new Asteroid()) // what object do we place inside
    }
}

Game.prototype.randomPosition = function(){
    return [
        Math.floor(Game.DIM_X * Math.random()),
        Math.floor(Game.DIM_Y * Math.random())
    ];
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach((as) => {
        as.draw(ctx);
    });
}

module.exports = Game;