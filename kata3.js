const numberOfVowels = function(data) {
  vowelCount = 0;
  for(i = 0; i < data.length; i++){
    switch(data[i]){
      case "a":
        vowelCount++;
        break;
      case "e":
        vowelCount++;
        break;
      case "i":
        vowelCount++;
        break;
      case "o":
        vowelCount++;
        break;
      case "u":
        vowelCount++;
        break;
    }
  }
  console.log(vowelCount);
  return vowelCount;
};

numberOfVowels("orange");
numberOfVowels("lighthouse labs");
numberOfVowels("aeiou");

