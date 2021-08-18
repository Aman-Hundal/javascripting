const numbers = [1,2,3,4,5,6,7,8,9,10];
const filtered = numbers.filter(function evenNumbers (number) {
  return (number % 2) === 0
})
console.log(filtered)

// the above filter method uses function expression (a sleeker and more efficient way to create a function). To understand the filter method break down the function expression into how you do normal funtion creation //