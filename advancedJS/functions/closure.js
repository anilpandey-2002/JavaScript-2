// function outerFunction() {
//     let counter = 0; // Local variable
//     return function innerFunction() {
//       counter++;
//       console.log(counter); // Accesses 'counter' from the outer function
//     };
//   }

//   const counterClosure = outerFunction();
//   counterClosure(); // Output: 1
//   counterClosure(); // Output: 2
