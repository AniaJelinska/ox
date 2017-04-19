import { expect } from "chai";
import {cell} from "../src/cell";
import {createBoard} from "../src/board";
import {generateNextCellValue, generateAllMoves} from "../src/actionGenerator";

describe("actionGenerator", () => {
  describe("generateNextCellValue", () => {
    it("given cell.empty should return cell.x", () => {
      expect(generateNextCellValue(cell.empty)).to.equal(cell.x);
    });
    it("given cell.o should return cell.x", () => {
      expect(generateNextCellValue(cell.o)).to.equal(cell.x);
    });
    it("given cell.x should return cell.o", () => {
      expect(generateNextCellValue(cell.x)).to.equal(cell.o);
    });
  });

  describe("generateAllMoves", () => {
    it("should contain 9 elements", () => {
      const board = createBoard();
      expect(generateAllMoves(cell.x, board).length).to.equal(board.length);
    });
  });
});
