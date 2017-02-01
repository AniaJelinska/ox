import { expect } from 'chai';
import { isEmpty } from 'ramda';

const cell = {};
cell.x = "x";
cell.o = "o";
cell.empty = " ";

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

const board = [];
board.push (cell.x);
let index =0;
while (index < 8) {
  board.push (1);
  index++;
}

describe("board", () => {

  it("should not be undefined", () => {
    expect(board).to.not.be.undefined;
  })

  it("should not be empty", () => {
    expect(isEmpty(board)).to.be.false;
  });

  it("should contain 9 elements", () => {
    expect(board.length).to.equal(9);
  });

});
