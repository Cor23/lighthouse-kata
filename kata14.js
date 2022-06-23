const calculateChange = function(total, cash) {
  let returnValue = cash - total;
  let result = {};
  const coinType = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  const coinValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let amount;

  for(let i = 0; i < coinValue.length; i++){
    amount = Math.floor(returnValue / coinValue[i])
    if(amount > 0){
      result[coinType[i]] = amount;
      returnValue = returnValue % coinValue[i];
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));