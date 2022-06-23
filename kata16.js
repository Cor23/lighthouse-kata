const makeCase = function(input, style) {
  let inputValue = input;
  let inputArrayed = input.split(" ");

//---------------Functions--------------//
//------------Camel Function------------// 
  let camelizer = function(inputArrayed){
    let camelCased = "";
        for(let i = 0; i < inputArrayed.length; i++){
          inputArrayed[i] = inputArrayed[i][0].toUpperCase() + inputArrayed[i].substr(1);
        }
        for(let j = 0; j < inputArrayed.length; j++){
          camelCased += inputArrayed[j].concat();
        }
        return camelCased.charAt(0).toLowerCase() + camelCased.substr(1);
  }
//------------Pascal Function------------// 
  let pascalizer = function(inputArrayed){
    let pascalCased = "";
      for(let i = 0; i < inputArrayed.length; i++){
        inputArrayed[i] = inputArrayed[i][0].toUpperCase() + inputArrayed[i].substr(1);
      }
      for(let j = 0; j < inputArrayed.length; j++){
        pascalCased += inputArrayed[j].concat();
      }
      return pascalCased;
  }
//------------Snake Function------------//
  let snakeizer = function(inputValue){
    let snakeCased = "";
      for(let i = 0; i < inputValue.length; i++){
        if(inputValue[i] !== " "){
          snakeCased += inputValue[i];
        } else if(inputValue[i] === " "){
          snakeCased += "_";
        }
      }
      return snakeCased;
  }
//------------Kebab Function------------//
  let kebabizer = function(inputValue){
    let kebabCased = "";
      for(let i = 0; i < inputValue.length; i++){
        if(inputValue[i] !== " "){
          kebabCased += inputValue[i];
        } else if(inputValue[i] === " "){
          kebabCased += "-";
        }
      }
      return kebabCased;
  }
//------------Title Function------------//
  let titleizer = function(inputArrayed){
    let titleCased = "";
      for(let i = 0; i < inputArrayed.length; i++){
        titleCased += inputArrayed[i][0].toUpperCase() + inputArrayed[i].substr(1) + " ";
      }
      titleCased.trim();
      return titleCased;
  }
//------------Vowel Function------------//
  let vowelizer = function(inputValue){
    let vowelCased = "";
      for(let i =0; i < inputValue.length; i++){
        switch(inputValue[i]){
          case "a":
            vowelCased += inputValue[i].toUpperCase();
            break;
          case "e":
            vowelCased += inputValue[i].toUpperCase();
            break;
          case "i":
            vowelCased += inputValue[i].toUpperCase();
            break;
          case "o":
            vowelCased += inputValue[i].toUpperCase();
            break;
          case "u":
            vowelCased += inputValue[i].toUpperCase();
            break;
          default:
            vowelCased += inputValue[i];
        }
      }
      return vowelCased;
  }
//------------Consonant Function------------//
  let consonantizer = function(){
    let consonantCased = "";
      for(let i = 0; i < inputValue.length; i++){
        switch(inputValue[i]){
          case "a":
            consonantCased += inputValue[i].toLowerCase();
            break;
          case "e":
            consonantCased += inputValue[i].toLowerCase();
            break;
          case "i":
            consonantCased += inputValue[i].toLowerCase();
            break;
          case "o":
            consonantCased += inputValue[i].toLowerCase();
            break;
          case "u":
            consonantCased += inputValue[i].toLowerCase();
            break;
          default:
            consonantCased += inputValue[i].toUpperCase();
        }
      }
      return consonantCased;
  }
//------------Uppercase Function------------//
  let upperizer = function(inputValue){
    let upperCased = "";
      for(let i = 0; i < inputValue.length; i++){
        upperCased += inputValue[i].toUpperCase();
      }
      return upperCased;
  }
//------------Lowercase Function------------//
  let lowerizer = function(inputValue){
    let lowerCased = "";
      for(let i = 0; i < inputValue.length; i++){
        lowerCased += inputValue[i].toLowerCase();
      }
      return lowerCased;
  }
//--------------------------------------------------//
if(Array.isArray(style) === false){
  switch(style){
    case "camel":
      return camelizer(inputArrayed);
      break;
    case "pascal":
      return pascalizer(inputArrayed);
      break;
    case "snake":
      return snakeizer(inputValue);
      break;
    case "kebab":
      return kebabizer(inputValue);
      break;
    case "title":
      return titleizer(inputArrayed);
      break;
    case "vowel":
      return vowelizer(inputValue);
      break;
    case "consonant":
      return consonantizer(inputValue)
      break;
    case "upper":
      return upperizer(inputValue);
      break;
    case "lower":
      return lowerizer(inputValue);
      break;
  }
} else if(Array.isArray(style) === true){
  let styleOne = style[0];
  let styleTwo = style[1];
  switch(true){
    case (styleOne === "upper" && styleTwo === "snake"):
      let snakeUpperStyle = snakeizer(inputValue);
      let snakeUpperOutput = upperizer(snakeUpperStyle);
      return snakeUpperOutput;
      break;
    case (styleOne === "upper" && styleTwo === "kebab"):
      let kebabUpperStyle = kebabizer(inputValue);
      let kebabUpperOutput = upperizer(kebabUpperStyle);
      return kebabUpperOutput;
      break;
    case (styleOne === "lower" && styleTwo === "snake"):
      let snakeLowerStyle = snakeizer(inputValue);
      let snakeLowerOutput = lowerizer(snakeLowerStyle);
      return snakeLowerOutput;
      break;
    case (styleOne === "lower" && styleTwo === "kebab"):
      let kebabLowerStyle = kebabizer(inputValue);
      let kebabLowerOutput = lowerizer(kebabLowerStyle);
      return kebabLowerOutput;
      break;
  }
}
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "kebab"]));
console.log(makeCase("this is a string", ["lower", "snake"]));
console.log(makeCase("this is a string", ["lower", "kebab"]));