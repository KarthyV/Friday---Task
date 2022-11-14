var playerRed = "Red";
var playerYellow = "Yellow";
var curPlayer = playerRed;
var gameBoard = document.querySelector(".gameBoard");

var gameOver = false;
var gameBoard;

var rows = 6;
var columns = 7;

resetGame();

function resetGame() {
  board = [];
  for (let curRow = 0; curRow < rows; curRow++) {
    let row = [];
    for (let curCol = 0; curCol < columns; curCol++) {
      row.push(" ");

      let eachTile = document.createElement("div");
      let tileID = `${curRow}-${curCol}`;
      eachTile.setAttribute("id", tileID);
      eachTile.setAttribute("class", "tile");
      eachTile.addEventListener("click", setTile);
      gameBoard.append(eachTile);
    }
    board.push(row);
  }
  console.log(board);
}

function setTile() {
  if (gameOver) {
    return;
  }

  let selectedTile = this;
  let [selectedRow, selectedCol] = selectedTile.id.split("-").map(Number);
  board[selectedRow][selectedCol] = curPlayer;
  if (curPlayer == playerRed) {
    selectedTile.classList.add("red");
    curPlayer = playerYellow;
  } else {
    selectedTile.classList.add("yellow");
    curPlayer = playerRed;
  }
}
