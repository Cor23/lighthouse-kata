const urlEncode = function(text) {

  let trimmedString = text.trim();
  let encodedString = '';
  
  for(i = 0; i < 1; i++){
    for(j = 0; j < trimmedString.length; j++){
      if(trimmedString[j] !== " "){
        encodedString += trimmedString[j];
      } else if(trimmedString[j] === " "){
        encodedString += "%20";
      }
    }
    console.log(encodedString);
    return encodedString;
  }
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

