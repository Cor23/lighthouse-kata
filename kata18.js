const squareCode = function(message) {
  let msgSpcRmv = message.replaceAll(" ", "");
  let msgLength = msgSpcRmv.length;
  let sqrNum = Math.ceil(Math.sqrt(msgLength));
  let sqrString = "";
  let output = "";
  
  for(let i = 0; i < sqrNum; i++){
    if(i === sqrNum){
      sqrString += msgSpcRmv.substr(0, sqrNum);
    } else {
      sqrString += msgSpcRmv.substr(0, sqrNum) + "\n";
      msgSpcRmv = msgSpcRmv.substr(sqrNum);
    }
  }
  
  sqrString = sqrString.trim();
  sqrString = sqrString.split("\n");
  
  for(let j = 0; j < sqrString[0].length; j++){
    for(let k = 0; k < sqrString.length; k++){
      if(sqrString[k][j]){
      output += sqrString[k][j];
      }
    }
    output += " ";
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));