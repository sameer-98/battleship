/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().init();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\nvar display = (0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar app = function app() {\n  var init = function init() {\n    var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Sameer');\n    var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('AI');\n    var players = new Array();\n    players.push(player1, player2);\n\n    // place ships randomly and get the boards\n    var board1 = player1.gameboard.placeShipsRandomly();\n    var board2 = player2.gameboard.placeShipsRandomly();\n    console.table(board1);\n    console.table(board2);\n\n    // render the boards and attach event listeners\n    display.renderBoard('player1', player1, players);\n    display.renderBoard('player2', player2, players);\n  };\n  var gameLoop = function gameLoop(players) {\n    if (players[0].gameboard.shipsSunk() || players[1].gameboard.shipsSunk()) {\n      display.displayResult(players[0], players[1]);\n      return;\n    }\n    console.log(players[0].getName());\n    var banner = document.querySelector('.blinking');\n    banner.textContent = \"PC's turn\";\n    var attack = players[0].attackRandomly();\n    setTimeout(function () {\n      attack.status ? display.renderAttack('hit', 'player1', attack.x, attack.y) : display.renderAttack('miss', 'player1', attack.x, attack.y);\n      players[0].gameboard.shipsSunk() || players[1].gameboard.shipsSunk() ? display.displayResult(players[0], players[1]) : banner.textContent = 'Your Turn';\n    }, 1000);\n  };\n  return {\n    gameLoop: gameLoop,\n    init: init\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://battleship/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/modules/app.js\");\n\nvar UI = function UI() {\n  var SIZE = 10;\n  var hasAttacked = false;\n  var setHasAttack = function setHasAttack(bool) {\n    hasAttacked = bool;\n  };\n\n  // helper function to create a square\n  var createSquare = function createSquare(row, col) {\n    var square = document.createElement('button');\n    square.classList.add('btn', 'btn-outline-primary', 'p-4', 'col');\n    square.setAttribute('data-row', row);\n    square.setAttribute('data-col', col);\n    return square;\n  };\n\n  //create the game boards for each player\n  var renderBoard = function renderBoard(id, player, players) {\n    var playerElement = document.getElementById(id);\n    var userBoard = player.gameboard.board;\n    var board = document.createElement('div');\n    board.classList.add('container', 'border', 'border-5', 'border-primary');\n    for (var i = 0; i < SIZE; i++) {\n      var row = document.createElement('div');\n      row.classList.add('row');\n      var _loop = function _loop(j) {\n        var square = createSquare(i, j);\n        if (id === 'player1' && userBoard[i][j] !== null) {\n          square.style.backgroundColor = 'grey';\n          square.style.pointerEvents = 'none';\n        }\n        if (id === 'player2') {\n          square.addEventListener('click', function (e) {\n            var row = e.target.dataset.row;\n            var col = e.target.dataset.col;\n            var attackSuccessful = player.gameboard.receiveAttacks(row, col);\n            attackSuccessful ? renderAttack('hit', 'player2', row, col) : renderAttack('miss', 'player2', row, col);\n            square.style.pointerEvents = 'none';\n            (0,_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().gameLoop(players);\n          });\n        }\n        row.appendChild(square);\n      };\n      for (var j = 0; j < SIZE; j++) {\n        _loop(j);\n      }\n      board.appendChild(row);\n    }\n    playerElement.appendChild(board);\n  };\n  function renderAttack(type, id, row, col) {\n    var player = document.getElementById(id);\n    var button = player.querySelector(\"[data-row=\\\"\".concat(row, \"\\\"][data-col=\\\"\").concat(col, \"\\\"]\"));\n    if (type === 'hit') {\n      button.style.backgroundColor = 'green';\n    } else {\n      button.style.backgroundColor = 'red';\n    }\n  }\n  function displayResult(player1, player2) {\n    console.log(player1.getName(), player2.getName());\n    var result = document.querySelector('.result');\n    if (player1.gameboard.shipsSunk()) {\n      result.textContent = \"\".concat(player1.getName(), \" is the winner\");\n    } else {\n      result.textContent = \"\".concat(player2.getName(), \" is the winner\");\n    }\n  }\n  return {\n    renderBoard: renderBoard,\n    hasAttacked: hasAttacked,\n    renderAttack: renderAttack,\n    setHasAttack: setHasAttack,\n    displayResult: displayResult\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/modules/ships.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar SIZE = 10;\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    _classCallCheck(this, Gameboard);\n    this.board = [];\n    this.missedAttack = [];\n    this.createBoard();\n    this.ships = [];\n  }\n  // Create the game board \n  _createClass(Gameboard, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      for (var i = 0; i < SIZE; i++) {\n        this.board[i] = [];\n        this.missedAttack[i] = [];\n        for (var j = 0; j < SIZE; j++) {\n          this.board[i][j] = null;\n          this.missedAttack[i][j] = false;\n        }\n      }\n    }\n  }, {\n    key: \"placeShips\",\n    value: function placeShips(ship, length, isVertical, row, col) {\n      // Create a ship object and associate each of the square spanning the length of the ship with that object\n      // first check if the placement is possible\n\n      if (!this.isPlacementPossible(length, isVertical, row, col)) return false;\n      if (isVertical) {\n        for (var i = row; i < row + length; i++) {\n          this.board[i][col] = ship;\n        }\n        return true; // TODO: When doing DOM manipulation return board to be rendered\n      }\n\n      for (var j = col; j < col + length; j++) {\n        this.board[row][j] = ship;\n      }\n      return true;\n    }\n  }, {\n    key: \"isPlacementPossible\",\n    value: function isPlacementPossible(length, isVertical, row, col) {\n      // Check in the horizontal direction if going out of board\n      if ((col < 0 || col + (length - 1) > SIZE - 1 || col > SIZE - 1 || row > SIZE - 1) && !isVertical) {\n        return false;\n      }\n      // Check in the vertical direction if going out of board\n      if (isVertical && (row < 0 || row + (length - 1) > SIZE - 1 || row > SIZE - 1 || col > SIZE - 1)) {\n        return false;\n      }\n\n      // Any of the field is already taken\n      //console.log(row,col,length, isVertical);\n      if (this.board[row][col] !== null) {\n        return false;\n      }\n\n      // Any of the neighbor fields are taken\n      if (isVertical) {\n        for (var i = row; i < row + length; i++) {\n          if (this.board[i][col] !== null) return false;\n        }\n      } else {\n        for (var j = col; j < col + length; j++) {\n          if (this.board[row][j] !== null) return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"receiveAttacks\",\n    value: function receiveAttacks(row, col) {\n      // Function returns true if the attack hits ship and false if doesn't\n      if (this.board[row][col] !== null) {\n        this.board[row][col].hit();\n        return true;\n      } else {\n        this.missedAttack[row][col] = true;\n      }\n      return false;\n    }\n  }, {\n    key: \"shipsSunk\",\n    value: function shipsSunk() {\n      // Function return true if all the ships on the board have sunk else false\n      return this.ships.every(function (ship) {\n        return ship.isSunk();\n      });\n    }\n  }, {\n    key: \"placeShipsRandomly\",\n    value: function placeShipsRandomly() {\n      var carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n      var battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n      var destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n      var submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n      var patrol = (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n      this.ships.push(carrier, battleship, destroyer, submarine, patrol);\n      var isSuccessfulPlacement = 0;\n      while (isSuccessfulPlacement < 5) {\n        var ship = this.ships[isSuccessfulPlacement];\n        var x = Math.floor(Math.random() * 10);\n        var y = Math.floor(Math.random() * 10);\n        var length = ship.getLength();\n        var isVertical = Math.round(Math.random()) === 0 ? false : true; // 0 -> false, 1 -> true\n        if (this.placeShips(ship, length, isVertical, x, y)) {\n          isSuccessfulPlacement++;\n        }\n      }\n      return this.board;\n    }\n  }]);\n  return Gameboard;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n//module.exports = Gameboard;\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\nvar player = function player(name) {\n  var attackPosition = new Set();\n  var getName = function getName() {\n    return name;\n  };\n  var gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var attack = function attack(row, col) {\n    // returns undefined if already attacked at that position\n    if (!attackPosition.has([row, col])) {\n      attackPosition.add([row, col]);\n      return gameboard.receiveAttacks(row, col);\n    }\n  };\n  var attackRandomly = function attackRandomly() {\n    var x = Math.floor(Math.random() * 10);\n    var y = Math.floor(Math.random() * 10);\n    var status = attack(x, y);\n    return {\n      status: status,\n      x: x,\n      y: y\n    };\n  };\n  return {\n    gameboard: gameboard,\n    getName: getName,\n    attack: attack,\n    attackRandomly: attackRandomly\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n//module.exports = player\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ships.js":
/*!******************************!*\
  !*** ./src/modules/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ships = function ships(size) {\n  var hits = 0;\n\n  // Returning size of ship\n  var getLength = function getLength() {\n    return size;\n  };\n\n  // Indicate the hit on the ship\n  var hit = function hit() {\n    return ++hits;\n  };\n  var getHits = function getHits() {\n    return hits;\n  };\n  var isSunk = function isSunk() {\n    return hits === size;\n  };\n  return {\n    getLength: getLength,\n    hit: hit,\n    getHits: getHits,\n    isSunk: isSunk\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n//module.exports = ships;\n\n//# sourceURL=webpack://battleship/./src/modules/ships.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;