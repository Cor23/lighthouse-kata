const blocksAway = function(directions) {
  let output = {"east": 0, "north": 0};
  let facingDir;
  let dir = [];
  let steps = [];

//seperates array directions into seperate arrays dir, steps.
  for(let i = 0; i < directions.length; i++){
    switch(isNaN(directions[i])){
      case true:
        dir.push(directions[i]);
        break;
      default:
        steps.push(directions[i]);
    }
  };
//sets starting direction.
switch(dir[0]){
  case 'right':
    facingDir = 'east';
    break;
  case 'left':
    facingDir = 'north';
    break;
};
//-------------------------------------------------------------//
  
//-------------------------------------------------------------//
  console.log(facingDir)
  console.log(dir);
  console.log(steps);
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));