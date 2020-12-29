/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nconst DEFAULT = {\n    COLOR: \"blue\",\n    RADIUS: 15,\n    VEL: 5,\n};\n\nfunction Asteroid(object) {\n    object.color = DEFAULT.COLOR;\n    object.radius = DEFAULT.RADIUS;\n    object.vel = Util.randomVec(DEFAULT.VEL);\n    MovingObject.call(this, object);\n }\nUtil.inherits(Asteroid,MovingObject);\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nfunction Game() {\n    this.asteroids = [];\n    this.bullets = [];\n    this.ships = [];\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function (){\n    while(this.asteroids.length < Game.NUM_ASTEROIDS){\n        this.asteroids.push(new Asteroid()) // what object do we place inside\n    }\n}\n\nGame.prototype.randomPosition = function(){\n    return [\n        Math.floor(Game.DIM_X * Math.random()),\n        Math.floor(Game.DIM_Y * Math.random())\n    ];\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);\n    this.asteroids.forEach((as) => {\n        as.draw(ctx);\n    });\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// Function.prototype.inherits = function(SuperClass){\n//     function Surrogate() {};\n//     Surrogate.prototype = SuperClass.prototype;\n//     this.prototype = new Surrogate();\n//     this.prototype.constructor = this;\n// }\n\n// function Asteroid() { }\n// Asteroid.inherits(MovingObject);\n\nfunction MovingObject(object){\n    this.pos = object.pos;\n    this.vel = object.vel;\n    this.radius = object.radius;\n    this.color = object.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n    \n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n};\n\n\nmodule.exports = MovingObject;\n  \n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n      scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n      }\n};\n\n\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nwindow.Game = Game;\nwindow.Asteroid = Asteroid;\nwindow.MovingObject = MovingObject;\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const as = new Asteroid();\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    // grab canvas element from ln 17 of our html\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n  \n    const ctx = canvasEl.getContext('2d');\n    ctx.fillstyle = \"black\"\n    ctx.fillRect(20,20,1000,1500);\n    \n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    mo.draw(ctx);\n\n    const as = new Asteroid({\n        pos: [60, 60],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    })\n\n    as.draw(ctx)\n  });\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;