/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  // print out the first row of the array
  // print all the rows in the array
  // change each row to a string
  // loop through the string and make a template literal from it to look like this   X  |     |
  let rowToString = "";
  let newString = "";

  for (let i = 0; i < board.length; i++) {
    if (i === board.length - 1) {
      rowToString = board[i]
        .toString()
        .split(",")
        .join("  |  ")
        .replaceAll("_", " ");
      newString += `  ${rowToString}\n=================`;
    } else {
      rowToString = board[i]
        .toString()
        .split(",")
        .join("  |  ")
        .replaceAll("_", " ");
      newString += `  ${rowToString}\n=================\n`;
    }
  }
  return newString;
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
