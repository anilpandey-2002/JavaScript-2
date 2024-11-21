// // A function that returns a promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = true; // Change this to false to see how reject works
//     setTimeout(() => {
//       if (success) {
//         resolve('Data fetched successfully!');
//       } else {
//         reject('Error fetching data');
//       }
//     }, 2000); // Simulate an asynchronous operation with setTimeout
//   });
// }

// // Using the promise
// fetchData()
//   .then(result => {
//     console.log(result);  // This will run if the promise is resolved
//   })
//   .catch(error => {
//     console.log(error);   // This will run if the promise is rejected
//   });
