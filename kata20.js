const blocksAway = function(directions) {
  let output = {"east": 0, "north": 0};
  const compass = ["north", "east", "south", "west"];
  let facingDir = compass[0];
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
  for(let j = 0; j < steps.length; j++){
  //NORTH
    if(facingDir === compass[0]){
      switch(dir[j]){
        case "right":
          facingDir = compass[1]
          output["east"] = +steps[j];
          break;
        case "left":
          facingDir = compass[3];
          output["east"] = -steps[j];
          break;
      }
    };
  //EAST
    if(facingDir === compass[1]){
      switch(dir[j]){

      }
    };
  //SOUTH
    if(facingDir === compass[2]){
      switch(dir[j]){

      }
    };
  //WEST
    if(facingDir === compass[3]){
      switch(dir[j]){

      }
    };
    
  };
//-------------------------------------------------------------//
  console.log(dir);
  console.log(steps);
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));