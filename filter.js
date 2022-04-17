const originalArray = [1, 3, 2, 5, 10];

// const evenNumbers = originalArray.filter(function(value) {
//   return value >= 5;
// })

const evenNumbers = originalArray.filter(value => value >= 5);

console.log(evenNumbers);