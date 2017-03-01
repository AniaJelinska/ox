import { expect } from "chai";
import { cell } from "../src/cell";

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
