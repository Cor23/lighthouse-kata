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
      facingDir = 'north';
      break;
    case 'left':
      facingDir = 'east';
      break;
  };
//-------------------------------------------------------------//
  for(let j = 0; j < steps.length;){
    if(facingDir === 'north'){
      if(dir[j] === 'right'){
        facingDir = 'east';
        output['east'] += steps[j];
        j++;
      } else if(dir[j] === 'left'){
        facingDir = 'west';
        output['east'] -= steps[j];
        j++;
      }
    }

    if(facingDir === 'east'){
      if(dir[j] === 'right'){
        facingDir = 'south';
        output['north'] -= steps[j];
        j++
      } else if(dir[j] === 'left'){
        facingDir = 'north';
        output['north'] += steps[j];
        j++
      }
    }

    if(facingDir === 'south'){
      if(dir[j] === 'right'){
        facingDir = 'west';
        output['east'] -= steps[j];
        j++
      } else if(dir[j] === 'left'){
        facingDir = 'east';
        output['east'] += steps[j];
        j++
      }
    }

    if(facingDir === 'west'){
      if(dir[j] === 'right'){
        facingDir = 'north';
        output['north'] += steps[j];
        j++
      } else if(dir[j] === 'left'){
        facingDir = 'south';
        output['north'] -= steps[j];
        j++
      }
    }
  };
//-------------------------------------------------------------//
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));