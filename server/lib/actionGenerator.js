"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAllMoves = generateAllMoves;
exports.generateNextCellValue = generateNextCellValue;

var _cell = require("./cell");

function generateAllMoves(cellvalue, board) {
  var index = 0;
  var result = [];

  while (index < board.length) {
    result[index] = "/makemove/" + cellvalue + "/" + index;
    index++;
  }
  return result;
}

function generateNextCellValue(lastMove) {
  return lastMove === _cell.cell.x ? _cell.cell.o : _cell.cell.x;
}