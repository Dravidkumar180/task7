// TASK 2 – Find Current Day Name
// Use getDay()
// Array:
// ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Print:
// Today is Friday


// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let today = new Date();
// let dayIndex = today.getDay();  
// let currentDay = days[dayIndex];
// console.log("Today is " + currentDay);

// TASK 3 – Age Calculator (Basic)
// let birthYear = 2003
// Use getFullYear()
// Print:
// Your age is 23


// let birthYear = 2003;
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log("Your age is " + age);

// TASK 4 – Create Specific Date
// Create:
// 15 August 2020
// 10:30:45 AM
// Using:
// - new Date()
// - setFullYear()
// - setMonth()
// - setDate()
// - setHours()
// - setMinutes()
// - setSeconds()
// Print using:
// toLocaleString()


// let myDate = new Date();
// myDate.setFullYear(2026);
// myDate.setMonth(2);
// myDate.setDate(15);
// myDate.setHours(10);
// myDate.setMinutes(30);
// myDate.setSeconds(45);

// console.log(myDate.toLocaleString());


// SECTION 2 – setTimeout & setInterval
// TASK 5 – Delayed Message
// Use setTimeout()
// After 3 seconds print:
// Welcome Naveen ■

// setTimeout(function() {
//     console.log("Welcome Dravidkumar");
// }, 3000);


// TASK 6 – Stop Interval After 5 Seconds
// Output:
// 1
// 2
// 3
// 4
// 5
// Stopped
// Use:
// - setInterval()
// - clearInterval()

// let count = 1;

// let interval = setInterval(function() {

//     console.log(count);

//     if (count === 5) {
//         clearInterval(interval);
//         console.log("Stopped");
//     }

//     count++;

// }, 1000);



// TASK 7 – Simple Promise
// If number > 10 → resolve("Valid number")
// Else → reject("Invalid number")
// Handle using:
// .then()
// .catch()
// .finally()

// let number = 15;

// let checkNumber = new Promise(function(resolve, reject) {

//     if (number > 10) {
//         resolve("Valid number");
//     } else {
//         reject("Invalid number");
//     }

// });

// checkNumber
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log("Promise completed");
//     });



// SECTION 4 – Fetch API Task
// TASK 8 – Fetch Product Prices
// API:
// https://fakestoreapi.com/products
// Print only:
// Product: <title>
// Price: <price>

// fetch("https://fakestoreapi.com/products")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {

//         data.forEach(function(product) {
//             console.log("Product:", product.title);
//             console.log("Price:", product.price);
//         });

//     })
//     .catch(function(error) {
//         console.log("Error:", error);
//     });

// SECTION 5 – Execution Order Task
// function one(){
//  console.log("one");
// }
// function two(){
//  console.log("two");
// }
// function three(){
//  console.log("three");
// }
// one()
// setTimeout(two,0)
// three()
// Predict Output and Explain Why



// function one(){
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }

// function three(){
//     console.log("three");
// }

// one();
// setTimeout(two, 0);
// three();


// It sends two() to the Web API / Timer Queue
// It does NOT execute immediately.