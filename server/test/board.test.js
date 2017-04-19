import {createBoard, setCellValue} from "../src/board";
import { expect } from "chai";
import { isEmpty } from "ramda";
import { cell } from "../src/cell";
import { isEmptyCell} from "../src/board";

describe("board", () => {
  const board = createBoard();

  it("should not be undefined", () => {
    expect(board).to.not.be.undefined;
  });

  it("should not be empty", () => {
    expect(isEmpty(board)).to.be.false;
  });

  it("should contain 9 elements", () => {
    expect(board.length).to.equal(9);
  });

  describe("each element", () => {
    it("should contain empty", () => {
      for (let index = 0; index <= 8; index++) {
        expect(board[index]).to.equal(cell.empty);
      }
    });
  });
});

describe("setCellValue", () => {
  it("given 1, cell.x and board should set board[1] to cell.x", () => {
    const board = createBoard();
    setCellValue(1, cell.x, board);
    expect(board[1]).to.equal(cell.x);
  });
});

describe("isEmptyCell", () => {
  it("given 1 and board with empty[1] should return true", () => {
    const board = createBoard();
    expect(isEmptyCell(1, board)).to.be.true;
  });
  it("given 1 and board with x[1] should return false", () => {
    const board = createBoard();
    setCellValue(1, cell.x, board);
    expect(isEmptyCell(1, board)).to.be.false;
  });
});
