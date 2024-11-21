// JavaScript's vObject is not a built-in feature or standard part of JavaScript. However, there might be some confusion with JavaScript Objects, which are widely used in JavaScript programming. If you're asking about working with JavaScript objects and their methods, here's a practical example:

// 1. Creating and Accessing Objects
// JavaScript objects are collections of key-value pairs.
// // Creating an object
// const person = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// // Accessing object properties
// console.log(person.name); // John
// console.log(person["age"]); // 30
// // Calling a method
// person.greet(); // Hello, my name is John

// 2. Methods to Work with Objects
// Object.keys()
// Returns an array of an object's property names (keys).
// const keys = Object.keys(person);
// console.log(keys); // ['name', 'age', 'greet']
// Object.values()
// Returns an array of an object's property values.
// const values = Object.values(person);
// console.log(values); // ['John', 30, function() {...}]
// Object.entries()
// Returns an array of an object's key-value pairs as arrays.
// const entries = Object.entries(person);
// console.log(entries); // [['name', 'John'], ['age', 30], ['greet', function() {...}]]
// Object.assign()
// Copies the values of all enumerable properties from one or more source objects to a target object.
// const additionalInfo = { occupation: "Developer" };
// const mergedPerson = Object.assign({}, person, additionalInfo);
// console.log(mergedPerson);
// // { name: 'John', age: 30, greet: function() {...}, occupation: 'Developer' }
// Object.freeze()
// Prevents any modifications to an object (i.e., prevents adding, removing, or changing properties).
// const immutablePerson = Object.freeze({ name: "Alice", age: 25 });
// immutablePerson.name = "Bob"; // Will not work because the object is frozen
// console.log(immutablePerson); // { name: 'Alice', age: 25 }
// Object.hasOwnProperty()
// Checks if the object has a property as its own (not inherited).
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("greet")); // true
// console.log(person.hasOwnProperty("address")); // false
// Object.getOwnPropertyDescriptor()
// Returns a descriptor of a given property on the object.
// const descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor); // { value: 'John', writable: true, enumerable: true, configurable: true }
// Object.setPrototypeOf()
// Sets the prototype (i.e., the internal [[Prototype]] property) of an object.
// const animal = { eats: true };
// const dog = Object.create(animal);
// console.log(dog.eats); // true (inherited from animal)
// Object.setPrototypeOf(dog, { barks: true });
// console.log(dog.barks); // true
// Object.getPrototypeOf()
// Returns the prototype (internal [[Prototype]]) of the specified object.
// console.log(Object.getPrototypeOf(dog)); // { barks: true }
// Object.defineProperty()
// Adds or modifies a property on an object.
// Object.defineProperty(person, "birthday", {
//   value: "1994-05-25",
//   writable: false
// });

// console.log(person.birthday); // 1994-05-25
// person.birthday = "2000-01-01"; // Will not change
// console.log(person.birthday); // 1994-05-25

// 3. Practice Example with Method
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   getCarInfo() {
//     return `${this.brand} ${this.model} (${this.year})`;
//   }
// };

// // Using methods on the object
// console.log(car.getCarInfo()); // Toyota Corolla (2022)

// // Modifying the car object
// Object.defineProperty(car, "year", { value: 2023, writable: false });

// console.log(car.getCarInfo()); // Toyota Corolla (2023)
// car.year = 2024; // This will not update the year property due to immutability
// console.log(car.getCarInfo()); // Toyota Corolla (2023)
