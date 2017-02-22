import {cell} from './cell';

export function isPatternAVictory (board, cellNumbers) {
  const firstNumber = cellNumbers[0];
  if (board[firstNumber] === cell.empty) {
    return false;
  }
  const secondNumber = cellNumbers[1];
  if (board[firstNumber] !== board[secondNumber]) {
   return false;
  }
  const thirdNumber = cellNumbers[2];
  if (board[firstNumber] !== board[thirdNumber]){
    return false;
  }
  return true;
}

export const patterns = [
  // rzędy
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // kolumny
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // skosy
  [0, 4, 8],
  [2, 4, 6]
];
