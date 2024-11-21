// 1. Using setTimeout() - Executes a function after a delay
// // This function will run after 3 seconds
// setTimeout(() => {
//     console.log("This message appears after 3 seconds.");
// }, 3000);
// In this example, setTimeout() delays the execution of the provided function by 3 seconds (3000 milliseconds).

// 2. Using setInterval() - Executes a function repeatedly at specified intervals
// let counter = 0;
// const intervalId = setInterval(() => {
//     counter++;
//     console.log(`This message appears every 2 seconds: ${counter}`);

//     // Stop the interval after 10 seconds
//     if (counter === 5) {
//         clearInterval(intervalId);
//         console.log("Interval stopped after 5 iterations.");
//     }
// }, 2000);
// Here, setInterval() runs the provided function every 2 seconds, and the interval is cleared after 5 iterations using clearInterval().

// 3. Using Date to track time
// If you want to track or compare the current time, you can use JavaScript's Date object.
// const startTime = new Date();

// setTimeout(() => {
//     const endTime = new Date();
//     const elapsedTime = (endTime - startTime) / 1000; // Time in seconds
//     console.log(`Elapsed time: ${elapsedTime} seconds`);
// }, 3000);
// This will calculate and display the time elapsed after a delay of 3 seconds.

// 4. Combining multiple time-based events
// You can combine setTimeout() and setInterval() for more complex timing-based behavior.
// setTimeout(() => {
//     console.log("Starting periodic message...");
//     const intervalId = setInterval(() => {
//         console.log("This message repeats every 2 seconds.");
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.log("Interval stopped after 6 seconds.");
//     }, 6000);
// }, 2000);
