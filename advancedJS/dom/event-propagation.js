// Event propagation describes the order in which events are handled in the DOM. There are two phases:

// Bubbling phase: The event starts from the target element and bubbles up to the root (document).
// Capturing phase: The event starts from the root and propagates down to the target element.
// You can control the event flow by stopping propagation at different points using methods like stopPropagation() and stopImmediatePropagation().

// Example 1: Event Bubbling
// Event bubbling means that when an event is triggered on an element, it will propagate (or "bubble") up to its parent elements.

// Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Bubbling Example</title>
// </head>
// <body>
//   <div id="parent" style="padding: 20px; border: 1px solid #000;">
//     Parent Div
//     <button id="child" style="margin-left: 20px;">Click Me</button>
//   </div>

//   <script>
//     // Event listener on parent (bubbling phase)
//     document.getElementById("parent").addEventListener("click", function() {
//       alert("Parent clicked!");
//     });

//     // Event listener on child
//     document.getElementById("child").addEventListener("click", function() {
//       alert("Child button clicked!");
//     });
//   </script>
// </body>
// </html>

// Example 2: Stopping Event Propagation
// If you want to prevent the event from propagating further up (bubbling), you can use event.stopPropagation().

// Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Stop Propagation Example</title>
// </head>
// <body>
//   <div id="parent" style="padding: 20px; border: 1px solid #000;">
//     Parent Div
//     <button id="child" style="margin-left: 20px;">Click Me</button>
//   </div>

//   <script>
//     // Event listener on parent (bubbling phase)
//     document.getElementById("parent").addEventListener("click", function() {
//       alert("Parent clicked!");
//     });

//     // Event listener on child with stopPropagation
//     document.getElementById("child").addEventListener("click", function(event) {
//       alert("Child button clicked!");
//       event.stopPropagation(); // Prevents bubbling to parent
//     });
//   </script>
// </body>
// </html>

// 3. Event Capturing (or Trickling)
// Event capturing is the opposite of bubbling. The event starts from the root and travels down to the target element.

// You can enable capturing by passing true as the third argument to addEventListener().

// Example:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Capturing Example</title>
// </head>
// <body>
//   <div id="parent" style="padding: 20px; border: 1px solid #000;">
//     Parent Div
//     <button id="child" style="margin-left: 20px;">Click Me</button>
//   </div>

//   <script>
//     // Event listener on parent (capturing phase)
//     document.getElementById("parent").addEventListener("click", function() {
//       alert("Parent clicked (capturing)!");
//     }, true); // true enables capturing

//     // Event listener on child
//     document.getElementById("child").addEventListener("click", function() {
//       alert("Child button clicked!");
//     });
//   </script>
// </body>
// </html>
