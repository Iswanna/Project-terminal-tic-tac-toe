import { checkIfNoMovesLeft, printBoard } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("printBoard should return a formatted board string", () => {
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];

  const expected = `\x20\x20X\x20\x20|\x20\x20\x20\x20\x20|\x20\x20\x20\n=================\n\x20\x20\x20\x20\x20|\x20\x20X\x20\x20|\x20\x20\x20\n=================\n\x20\x20O\x20\x20|\x20\x20O\x20\x20|\x20\x20X\n=================`;

  expect(printBoard(board)).toEqual(expected);
});
