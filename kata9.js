const camelCase = function(input) {
  const words = input.split(' '); // Converts string to an array of words.
  let camelized = '';

  for(let i = 0; i < words.length; i++){ // Capitalize each word in the array.
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  for(let j = 0; j < words.length; j++){ // Concat array indexes back into string.
    camelized += words[j];
  }
  return(camelized.charAt(0).toLowerCase() + camelized.substr(1));
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));