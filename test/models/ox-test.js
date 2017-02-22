import { expect } from 'chai';
import { isEmpty } from 'ramda';
import { cell } from '../../src/cell';
import {createBoard, setCellValue} from '../../src/board';
import {isPatternAVictory} from '../../src/judge';

describe("cell", () => {
  it("should not be undefined", () => {
    expect(cell).to.not.be.undefined;
  });

  it("should contain defined x", () => {
    expect(cell.x).to.not.be.undefined;
  });

  it("should contain defined o", () => {
    expect(cell.o).to.not.be.undefined;
  });

  it("should contain defined empty", () => {
    expect(cell.empty).to.not.be.undefined;
  });
});

describe("board", () => {
  const board = createBoard();

  it("should not be undefined", () => {
    expect(board).to.not.be.undefined;
  })

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

describe("isPatternAVictory", () => {
  const cellNumbers = [0, 1, 2];

  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.false;
  })

  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    setCellValue(0, cell.x, board);
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.false;
  })
  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    setCellValue(0, cell.x, board);
    setCellValue(1, cell.x, board);
    setCellValue(2, cell.x, board);
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.true;
  })
})
