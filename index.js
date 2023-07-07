var numbers = [1, 2, 3, , 5, 6];
var result = numbers.find(function(currentValue) {
  return currentValue > 5;
});
console.log(result);
