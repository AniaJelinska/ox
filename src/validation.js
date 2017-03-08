import { cell } from "./cell";

export function isOorX (input) {
  if(cell.x === input) {
    return true;
  }
  if(cell.o === input) {
    return true;
  }
  return false;
}
export function isOnBoard (input, board) {
  if (board.length - 1 >= input && input >= 0) {
    return true;
  }
  return false;
}
