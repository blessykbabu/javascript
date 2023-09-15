let x = 10;
const y = 20;

let z; // DECLARE VARIABLE Z
x = y + z;

let greeting = "Hello";
if (greeting === "Hello") {
  console.log("Hi!");
} else {
  console.log("Goodbye!");
}

let num = 10;
let doubled = num * 2;
console.log(doubled);

let colors = ["red", "green", "blue"];
let favoriteColor = colors[2]; // There is no value in index 3.length of the arry is 3
console.log(favoriteColor);

function add(x, y) {
  return x + y;
}

let result = add(5,2);// give 2 parameters
console.log(result);

let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName); //There is no key value age

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length - 1; i++) {
  // give length of the array -1
  console.log(numbers[i]);
}

function multiply(x, y) {
  return x * y;
}

let product = multiply(3, "2");
console.log("Product:", product);

function greet(name) {
  return "Hello, " + name;
}

let username = "Alice";
console.log(greet(username));

let age = 30; //age is a numerical vlue
console.log("Age in 5 years:", age + 5);

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: "A" },
  { name: "Charlie", grade: 92 },
];

for (let student of students) {
  if (student.grade >= 90 || student.grade == "A") {
    //give condition for "A" grade
    console.log(student.name + " has an A grade.");
  }
}

console.log("End of the code");
