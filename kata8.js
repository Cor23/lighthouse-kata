const repeatNumbers = function(data) {
  let output = '';
  for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i][1]; j++){
      output += String(data[i][0]);
    }
    output += ', ';
  }
  output = output.slice(0, -2)
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));