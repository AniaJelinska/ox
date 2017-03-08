import { expect } from "chai";
import { cell } from "../src/cell";
import {isOorX, isOnBoard} from "../src/validation";
import {createBoard} from "../src/board";

describe("validation", () => {
  describe("isOorX", () => {
    it("given x should return true", () => {
      expect(isOorX(cell.x)).to.be.true;
    });
    it("given o should return true", () => {
      expect(isOorX(cell.o)).to.be.true;
    });
    it("given 'some random input' should return false", () => {
      expect(isOorX("some random input")).to.be.false;
    });
  });
  describe("isOnBoard", () => {
    it("given 5 should return true", () => {
      const board = createBoard ();
      expect(isOnBoard(5, board)).to.be.true;
    });
    it("given 8 should return true", () => {
      const board = createBoard ();
      expect(isOnBoard(8, board)).to.be.true;
    });
    it("given 9 should return false", () => {
      const board = createBoard ();
      expect(isOnBoard(9, board)).to.be.false;
    });
    it("given -1 should return false", () => {
      const board = createBoard ();
      expect(isOnBoard(-1, board)).to.be.false;
    });
  });
});
