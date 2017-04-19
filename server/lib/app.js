"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _board = require("./board");

var _cell = require("./cell");

var _validation = require("./validation");

var _judge = require("./judge");

var _actionGenerator = require("./actionGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
var board = (0, _board.createBoard)();
var lastMove = _cell.cell.empty;
var victory = false;
var possibleMoves = (0, _actionGenerator.generateAllMoves)(_cell.cell.x, board);

server.get("/newgame", function (request, response) {
  board = (0, _board.createBoard)();
  lastMove = _cell.cell.empty;
  victory = false;
  possibleMoves = (0, _actionGenerator.generateAllMoves)(_cell.cell.x, board);
  response.json({
    board: board,
    lastMove: lastMove,
    victory: victory,
    possibleMoves: possibleMoves,
    message: "new game generated"
  });
});

server.get("/makemove/:cellvalue/:cellnumber", function (request, response) {
  var canMakeThatMove = (0, _validation.isOorX)(request.params.cellvalue) && (0, _validation.isOnBoard)(request.params.cellnumber, board) && (0, _board.isEmptyCell)(request.params.cellnumber, board) && (0, _validation.isMoveDifferentThanLast)(request.params.cellvalue, lastMove) && !victory;

  if (canMakeThatMove) {
    (0, _board.setCellValue)(request.params.cellnumber, request.params.cellvalue, board);
    lastMove = request.params.cellvalue;
    victory = (0, _judge.hasAnyoneWon)(_judge.patterns, board);
    var nextMove = (0, _actionGenerator.generateNextCellValue)(lastMove);
    possibleMoves = (0, _actionGenerator.generateAllMoves)(nextMove, board);
  }

  response.json({
    board: board,
    lastMove: lastMove,
    victory: victory,
    possibleMoves: possibleMoves
  });
});

server.get("/getstate", function (request, response) {
  response.json({
    board: board,
    lastMove: lastMove,
    victory: victory,
    possibleMoves: possibleMoves
  });
});

server.listen(3000, function () {
  console.log("OX");
});