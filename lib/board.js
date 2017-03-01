"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBoard = createBoard;
exports.setCellValue = setCellValue;

var _cell = require("./cell");

function createBoard() {
  var board = [];
  var index = 0;
  while (index < 9) {
    board.push(_cell.cell.empty);
    index++;
  }
  return board;
}

function setCellValue(cellNumber, cellValue, board) {
  board[cellNumber] = cellValue;
}