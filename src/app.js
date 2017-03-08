import express from "express";
import {createBoard, setCellValue, isEmptyCell} from "./board";
import {cell} from "./cell";
import {isOorX, isOnBoard} from "./validation";

const server = express();
let board = createBoard();
setCellValue(0, cell.o, board);

server.get("/", (request, response) => {
  response.send("Czesc");
});

server.get("/newgame", (request, response) => {
  board = createBoard();
  response.json({message: "new game created"});
});

server.get("/makemove/:cellvalue/:cellnumber", (request, response) => {
  if (isOorX (request.params.cellvalue) && isOnBoard (request.params.cellnumber, board) && isEmptyCell (request.params.cellnumber, board)) {
    setCellValue(request.params.cellnumber, request.params.cellvalue, board);
  }
  response.json(board);
});

server.get("/getboard", (request, response) => {
  response.json(board);
});

server.listen(3000, () => {
  console.log("OX");
});
