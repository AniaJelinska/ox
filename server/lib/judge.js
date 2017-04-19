"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patterns = undefined;
exports.isPatternAVictory = isPatternAVictory;
exports.hasAnyoneWon = hasAnyoneWon;

var _cell = require("./cell");

function isPatternAVictory(board, cellNumbers) {
  var firstNumber = cellNumbers[0];
  if (board[firstNumber] === _cell.cell.empty) {
    return false;
  }
  var secondNumber = cellNumbers[1];
  if (board[firstNumber] !== board[secondNumber]) {
    return false;
  }
  var thirdNumber = cellNumbers[2];
  if (board[firstNumber] !== board[thirdNumber]) {
    return false;
  }
  return true;
}

var patterns = exports.patterns = [
// rzędy
[0, 1, 2], [3, 4, 5], [6, 7, 8],

// kolumny
[0, 3, 6], [1, 4, 7], [2, 5, 8],

// skosy
[0, 4, 8], [2, 4, 6]];

function hasAnyoneWon(patterns, board) {
  var victory = false;
  patterns.forEach(function (pattern) {
    if (isPatternAVictory(board, pattern)) {
      victory = true;
    }
  });
  return victory;
}