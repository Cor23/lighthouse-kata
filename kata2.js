const conditionalSum = function(values, condition) {
  let addedTotal = 0;
  if(condition === "odd"){
    for(i = 0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        addedTotal += values[i];
      }
    }
  }
  if(condition === "even"){
    for(i = 0; i < values.length; i++){
      if(values[i] % 2 === 0){
        addedTotal += values[i];
      }
    }
  }
  console.log(addedTotal);
  return addedTotal;
};

conditionalSum([1, 2, 3, 4, 5], "even");
conditionalSum([1, 2, 3, 4, 5], "odd");
conditionalSum([13, 88, 12, 44, 99], "even");
conditionalSum([], "odd");

