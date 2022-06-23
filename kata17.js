const urlDecode = function(text) {
  let decodedUrl = {};
  const arrayOfUrl = text.split("=");
  const keyOne = arrayOfUrl[0];
  let valueOne;
  let keyTwo;
  let valueTwo = arrayOfUrl[2];

  if( arrayOfUrl[1].includes("&") === true){
    let filteredArray = arrayOfUrl[1].split("&");
    valueOne = filteredArray[0];
    keyTwo = filteredArray[1];
    valueTwo = valueTwo.replaceAll("%20", " ");
    decodedUrl[keyOne] = valueOne;
    decodedUrl[keyTwo] = valueTwo;
  } else {
    valueOne = arrayOfUrl[1];
    valueOne = valueOne.replaceAll("%20", " ");
    decodedUrl[keyOne] = valueOne;
  }
  return decodedUrl;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);