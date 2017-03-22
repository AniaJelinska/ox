function generateAllMoves(cellvalue, board) {
let index = 0;
const result = [];

  while (index < board.length) {
    result[index] = "/makemove/" + cellvalue + "/" + index;
    index++;
  }
}
