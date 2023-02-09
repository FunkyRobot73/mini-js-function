const sum100 = function() {
  let startingNumber = 100;
  let total = 0;
  while(startingNumber > 0) {
    total = total + startingNumber;
    startingNumber -= 1;
  }
  return total;
};

console.log(sum100());