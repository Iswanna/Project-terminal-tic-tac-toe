import { checkIfNoMovesLeft, printBoard } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test.only("printBoard should return a formatted board string", () => {
  const board = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["O", "O", "X"],
  ];

  const expected = `
  X  |     |     
=================
     |  X  |     
=================
  O  |  O  |  X  
=================`;

  expect(printBoard(board)).toEqual(expected);
});
