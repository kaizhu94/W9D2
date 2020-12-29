const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game");

window.Game = Game;
window.Asteroid = Asteroid;
window.MovingObject = MovingObject;
// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// const as = new Asteroid();

document.addEventListener('DOMContentLoaded', function () {
    // grab canvas element from ln 17 of our html
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
  
    const ctx = canvasEl.getContext('2d');
    ctx.fillstyle = "black"
    ctx.fillRect(20,20,1000,1500);
    
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);

    const as = new Asteroid({
        pos: [60, 60],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    })

    as.draw(ctx)
  });