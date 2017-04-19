import express from "express";
import {createBoard, setCellValue, isEmptyCell} from "./board";
import {cell} from "./cell";
import {isOorX, isOnBoard, isMoveDifferentThanLast} from "./validation";
import {patterns, hasAnyoneWon} from "./judge";
import {generateAllMoves, generateNextCellValue} from "./actionGenerator";

const server = express();
let board = createBoard();
let lastMove = cell.empty;
let victory = false;
let possibleMoves = generateAllMoves(cell.x, board);

server.get("/newgame", (request, response) => {
  board = createBoard();
  lastMove = cell.empty;
  victory = false;
  possibleMoves = generateAllMoves(cell.x, board);
  response.json({
    board,
    lastMove,
    victory,
    possibleMoves,
    message: "new game generated"
  });
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
    const nextMove = generateNextCellValue(lastMove);
    possibleMoves = generateAllMoves(nextMove, board);
  }

  response.json({
    board,
    lastMove,
    victory,
    possibleMoves
  });
});

server.get("/getstate", (request, response) => {
  response.json({
    board,
    lastMove,
    victory,
    possibleMoves
  });
});

server.listen(3000, () => {
  console.log("OX");
});
