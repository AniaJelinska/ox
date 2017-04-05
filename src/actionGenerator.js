import {cell} from "./cell";

export function generateAllMoves(cellvalue, board) {
  let index = 0;
  const result = [];

  while (index < board.length) {
    result[index] = "/makemove/" + cellvalue + "/" + index;
    index++;
  }
  return result;
}

export function generateNextCellValue(lastMove) {
  return lastMove === cell.x ? cell.o : cell.x; 
}
