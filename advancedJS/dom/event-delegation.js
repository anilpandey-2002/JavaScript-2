// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Event Delegation Example</title>
// </head>
// <body>
//   <ul id="parent-list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>

//   <script>
//     // Using event delegation to handle clicks on <li> elements
//     document.getElementById("parent-list").addEventListener("click", function(event) {
//       if (event.target.tagName === "LI") { // Check if the clicked target is an <li>
//         alert("You clicked on " + event.target.textContent);
//       }
//     });
//   </script>
// </body>
// </html>
// Event delegation is a technique where a parent element handles events for its child elements. Instead of attaching individual event listeners to each child element, you can attach a single event listener to the parent and use the event's target property to determine which child element was clicked or interacted with.
