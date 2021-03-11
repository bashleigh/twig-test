import { groupArrayElements } from "./index";

describe("groupArrayElements", () => {
  it("Given Example", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toStrictEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });

  it("Stress", () => {
    expect(
      groupArrayElements(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        8,
      ),
    ).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
      [13, 14],
      [15, 16, 17],
    ]);
  });

  it("Reverse Stress", () => {
    expect(groupArrayElements([1], 8)).toStrictEqual([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [1],
    ]);
  });
});
