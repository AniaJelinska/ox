import express from "express";
import {createBoard, setCellValue} from "./board";
import {cell} from "./cell";

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

server.get("/playermove/:cellvalue/:cellnumber", (request, response) => {
  setCellValue(request.params.cellnumber, request.params.cellvalue, board);
  response.json(board);
});

server.get("/getboard", (request, response) => {
  response.json(board);
});

server.listen(3000, () => {
  console.log("OX");
});
