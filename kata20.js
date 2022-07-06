const blocksAway = function(directions) {
  let output = {"east": 0, "north": 0};
  const compass = ["north", "east", "south", "west"];
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
//-------------------------------------------------------------//
  for(let j = 0; j < dir.length; j++){
    // set starting direction.
    if(dir[0] === 'right' && j === 0){
      facingDir = compass[1];
      output['east'] += steps[j];
      j++;
    } else if(dir[0] === 'left' && j === 0){
      facingDir = compass[0];
      output['north'] += steps[j];
      j++;
    };

    //NORTH
    if(facingDir === compass[0]){
      switch(dir[j]){
        case 'right':
          facingDir = compass[1];
          output['east'] += steps[j];
          j++;
          console.log(output, "NORTH-R")
          break;
        case 'left':
          facingDir = compass[3];
          output['east'] -= steps[j];
          j++;
          console.log(output, "NORTH-L")
          break;
      }
    };

    //EAST
    if(facingDir === compass[1]){
      switch(dir[j]){
        case 'right':
          facingDir = compass[2];
          output['north'] -= steps[j];
          j++;
          console.log(output, "EAST-R")
          break;
        case 'left':
          facingDir = compass[0];
          output['north'] += steps[j];
          j++;
          console.log(output, "EAST-L")
          break;
      }
    };

    //SOUTH
    if(facingDir === compass[2]){
      switch(dir[j]){
        case 'right':
          facingDir = compass[3];
          output['east'] -= steps[j];
          j++;
          console.log(output, "SOUTH-R")
          break;
        case 'left':
          facingDir = compass[1];
          output['east'] += steps[j];
          j++;
          console.log(output, "SOUTH-L")
          break;
      }
    };

    //WEST
    if(facingDir === compass[3]){
      switch(dir[j]){
        case 'right':
          facingDir = compass[0];
          output['north'] += steps[j];
          j++;
          console.log(output, "WEST-R")
          break;
        case 'left':
          facingDir = compass[2];
          output['north'] -= steps[j];
          j++;
          console.log(output, "WEST-L")
          break;
      }
    };

  }
//-------------------------------------------------------------//
  console.log(dir);
  console.log(steps);
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));