"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOorX = isOorX;
exports.isOnBoard = isOnBoard;

var _cell = require("./cell");

function isOorX(input) {
  if (_cell.cell.x === input) {
    return true;
  }
  if (_cell.cell.o === input) {
    return true;
  }
  return false;
}
function isOnBoard(input, board) {
  if (board.length - 1 >= input && input >= 0) {
    return true;
  }
  return false;
}