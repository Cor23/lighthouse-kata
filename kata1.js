const sumLargestNumbers = function(data){
  let lrgestNumOne = 0;
  let lrgestNumTwo = 0;
  let arrIndex;
  //First loop to find largest number
  for(let i = 0; i <= data.length; i++){
      if(data[i] > lrgestNumOne){
        lrgestNumOne = data[i];
        arrIndex = data.indexOf(lrgestNumOne);
      }
    }
  //Removes value of largest number from array
    data.splice(arrIndex, 1);
  //Second loop to find the next largest number
    for(j = 0; j < data.length; j++){
      if(data[j] > lrgestNumTwo){
        lrgestNumTwo = data[j];
      }
    }
    return lrgestNumOne + lrgestNumTwo;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

