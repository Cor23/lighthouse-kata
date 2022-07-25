let generateBoard = function(whiteQueen, blackQueen){
  let chessBoard = [];
  for(let i = 0; i < 8; i++){
    let row = [];
    chessBoard.push(row);
    for(let j = 0; j < 8; j++){
      if(whiteQueen[0] === i && whiteQueen[1] === j || blackQueen[0] === i && blackQueen[1] === j){
        row.push(1);
      } else {
        row.push(0);
      }
    }
  }
  return chessBoard;
};

let queenThreat = function(chessBoard){
  let queenPosition = [];
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(chessBoard[i][j] === 1){
        debugger
        queenPosition.push([i, j]);
      }
    }
  }

  let wQ = queenPosition[0];
  let bQ = queenPosition[1];
  
  if(wQ[0] === bQ[0] || wQ[1] === bQ[1] || Math.abs(wQ[0] - bQ[0]) === Math.abs(wQ[1] - bQ[1])){
    return true;
  } else {
    return false;
  }

};

let whiteQueen = [0, 5];
console.log("🚀 ~ file: kata19.js ~ line 39 ~ whiteQueen", whiteQueen)
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));