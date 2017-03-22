import express from "express";
import {createBoard, setCellValue, isEmptyCell} from "./board";
import {cell} from "./cell";
import {isOorX, isOnBoard, isMoveDifferentThanLast} from "./validation";
import {patterns, hasAnyoneWon} from "./judge";

const server = express();
let board = createBoard();
let lastMove = cell.empty;
let victory = false;

server.get("/newgame", (request, response) => {
  board = createBoard();
  lastMove = cell.empty;
  victory = false;
  response.json({board, lastMove, victory, message: "new game generated"});
});

server.get("/makemove/:cellvalue/:cellnumber", (request, response) => {
  const canMakeThatMove = isOorX (request.params.cellvalue)
    && isOnBoard (request.params.cellnumber, board)
    && isEmptyCell (request.params.cellnumber, board)
    && isMoveDifferentThanLast (request.params.cellvalue, lastMove)
    && !victory;

  if (canMakeThatMove)  {
    setCellValue(request.params.cellnumber, request.params.cellvalue, board);
    lastMove = request.params.cellvalue;
    victory = hasAnyoneWon (patterns, board);
  }

  response.json({board, lastMove, victory});
});

server.get("/getstate", (request, response) => {
  response.json({board, lastMove, victory});
});

server.listen(3000, () => {
  console.log("OX");
});
