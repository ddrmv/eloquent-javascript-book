const BOARD_SIZE = 8;

let board = "";
for (let line = 0; line < BOARD_SIZE; line++) {
  for (let column = 0; column < BOARD_SIZE; column++) {
    // using two chars per position makes it more readable
    (column + line) % 2 === 0 ? (board += "  ") : (board += "##");
  }
  board += "\n";
}
console.log(board);
