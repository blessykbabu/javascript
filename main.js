let a;
a = 10;
let b;
b = a;
// a=20;
console.log("a", a); // call by value.here variables stored in different memmory space.ie,a and b stored in different location so a update it didn't affect b.
console.log("b", b);
value(a, b);
let obj1 = { name: "reena", age: 10 };
let obj2 = obj1;
// obj1.name="manu"
// console.log(obj1)
// console.log(obj2)       //call by reference.here obj1 and its copy store in same location.so when obj1 updated obj2 also update

function value(a, b) {
  a = 40;

  console.log("a:function", a);
  console.log("b:function", b);
}

data(obj1, obj2);
function data(obj1, obj2) {
  obj1.name = "parvathy";
  console.log("obj:function", obj1);
  console.log("obj2:function", obj2);
}
let arr1 = ["apple", "orange"];
let arr2 = arr1;
// arr1[1]=1;
// console.log("array1",arr1)
// console.log("array2",arr2)
arrays1(arr1, arr2); //arrgument pass
function arrays1(arr1, arr2) {
  //here parameter
  arr1[1] = 2;
  console.log("array1:function", arr1);
  console.log("array2:function", arr2);
}

          //closre: A closure is the combination of a function bundled  together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function outerfunction() {
  let a = 10;
  function innerfunction() {                             
                                            //closure.function pass the enviourmnet also.
    return `a:${a}`;
  }
  return innerfunction;
}
let result = outerfunction();
console.log("result", result);
console.log("calling reult", result());
let result1 = function innerfunction() {
    return `a:${a}`;
  }

console.log("result1", result1);
console.log("calling reult1", result1());   //console result :here print error message .in this code value of 'a' print becouse 'a' declared in the staring of the code

