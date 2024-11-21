// Simulate a delay using setTimeout
function simulateDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Asynchronous function that uses async/await
async function fetchData() {
  console.log("Fetching data...");

  // Wait for 2 seconds (simulate network request)
  await simulateDelay(2000);

  console.log("Data fetched!");
}

// Call the async function
fetchData();

// Output:
// Fetching data...
// (2 seconds later)
// Data fetched!
