import { cell } from "./cell";

export function createBoard (){
  const board = [];
  let index =0;
  while (index < 9) {
    board.push (cell.empty);
    index++;
  }
  return board;
}

export function setCellValue (cellNumber, cellValue, board) {
  board[cellNumber] = cellValue;
}
