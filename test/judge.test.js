import { expect } from "chai";
import { cell } from "../src/cell";
import {isPatternAVictory} from "../src/judge";
import {createBoard, setCellValue} from "../src/board";
import {patterns} from "../src/judge";
import {hasAnyoneWon} from "../src/judge";

describe("isPatternAVictory", () => {
  const cellNumbers = [0, 1, 2];

  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.false;
  });

  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    setCellValue(0, cell.x, board);
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.false;
  });

  it ("given board and cellNumbers when board is empty should return false", () => {
    const board = createBoard();
    setCellValue(0, cell.x, board);
    setCellValue(1, cell.x, board);
    setCellValue(2, cell.x, board);
    const result = isPatternAVictory(board, cellNumbers);
    expect (result).to.be.true;
  });
});

describe("hasAnyoneWon", () => {
  it ("given board and patterns when board is not resolved should return false", () => {
    const board = createBoard ();
    setCellValue(0, cell.o, board);
    setCellValue(4, cell.x, board);
    const result = hasAnyoneWon(patterns, board);
    expect (result).to.be.false;
  });

  it ("given board and patterns when board is not resolved should return false", () => {
    const board = createBoard ();
    setCellValue(0, cell.o, board);
    setCellValue(1, cell.o, board);
    setCellValue(2, cell.o, board);
    const result = hasAnyoneWon(patterns, board);
    expect (result).to.be.true;
  });
});
