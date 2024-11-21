// // Higher-order function that takes a function as an argument
// function multiply(a, b, operation) {
//     return operation(a, b); // Applying the passed operation
//   }

//   function add(x, y) {
//     return x + y;
//   }

//   function subtract(x, y) {
//     return x - y;
//   }

//   // Using the higher-order function
//   console.log(multiply(5, 3, add)); // Output: 8
//   console.log(multiply(5, 3, subtract)); // Output: 2

//   // Higher-order function returning a function
//   function createMultiplier(factor) {
//     return function(x) {
//       return x * factor;
//     };
//   }

//   const double = createMultiplier(2);
//   console.log(double(4)); // Output: 8
