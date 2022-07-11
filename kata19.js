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
  console.table(chessBoard);
};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));