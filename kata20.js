const blocksAway = function(directions) {
  let output = {"east": 0, "north": 0};
  const compass = ["north", "east", "south", "west"];
  let facingDir = compass[0];
  let dir = [];
  let steps = [];

  // seperates direction and steps into own arrays.
  for(let i = 0; i < directions.length; i += 2){
    dir.push(directions[i]);
  };
  for(let j = 1; j < directions.length; j += 2){
    steps.push(directions[j]);
  };




  

//-------------------------------------------------------------//
  console.log(dir);
  console.log(steps);
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));