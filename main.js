let a;
a = 10;
let b;
b = a;
// a=20;
console.log("a", a); // call by value.here variables stored in different memmory space.ie,a and b stored in different location so a update it doesn't affect b.
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
arrays1(arr1, arr2);                  //arrgument pass
function arrays1(arr1, arr2) {         //here parameter
  arr1[1] = 2;
  console.log("array1:function", arr1);
  console.log("array2:function", arr2);
}

//closure: A closure is the combination of a function bundled  together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

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

            //timer
// setInterval(function(){
//   console.log("Body of the function");
// },1000)                                             //the console is print 10000 times

// setTimeout(function(){
//   console.log("set time out");                   // in this ,the console print after that time
// },10000)

           // SPREAD OPERATOR
var ob = { a: 1, b: 2, c: 3 };
var ob1 = { ...ob };
console.log(ob)
console.log(ob1)

var ar = [22, 33, 44, 55]
var ar1 = [...ar]
console.log(ar)
console.log(ar1)
console.log("maximum", Math.max(...ar));    //here use math to find maximum of the array

// destructuring
var obj11 = { name: "balu", age: 22, place: "kochi" }
var { name, age, place } = obj11; //ther is no need to give same order
console.log(name, age, place)
var array = [1, 2, 3, 4]
// var[a1,b1,c1,d1]=array
// console.log(a1,b1,c1,d1)

function my([a1, b1, c1, d1]) {
  console.log("inside the function", a1, b1, c1, d1)   // destructring array:using function
}
my(array)

var ob = {
  product: "pen",
  price: 10,
  quantity: 50                          //destructuring object:using function

}
function myfunction({ product, price, quantity }) {
  console.log("destructuring in function object:", product, price, quantity)
}
myfunction(ob)

// array inside array: destructuring(object inside object,object inside array,array inside object)

var ar3=[1,2,3,[99,77,66]]
var[p,q,r,[m,n,j]]=ar3
console.log("array inside array",p,q,r,m,n,j)
  // array functions
var ar4=[{name:"amal",mark:49,place:"malappuram"},{name:"anil",mark:48,place:"ernakulam"},{name:"avin",mark:50,place:"alappuzha"},{name:"akhil",mark:39,place:"kollam"}]
// console.log("array function",ar4)
// for each 
ar4.forEach((items,index)=>{ // items and index is a parameter
  console.log(items)  // here full object items is consoled     
  console.log(items.name)//only name values are consoled
})

  // find

  const x=ar4.find((items)=>{
    return items.name==="anil"  // === used to check the data type  .find the name anil 
  })
  console.log("x",x)

     //filter

  const xx=ar4.filter((items,index)=>{
    return items.mark<49    // filer the items less than the mark 49
  })
  console.log("xx",xx)

  //map

  const y=ar4.map((items)=>{
    return items.name
  })
  console.log("y",y)

  //reduce

  const v=ar4.reduce((total,items)=>{    //intial stage total=0.when function call total ie,0+45=45.then this 45 stored in total.next time 45 +next object mark(50 here). when skip to give 0 the it take the first array value
    return total+items.mark
  },0)
  console.log("value reduce function",v)

       // this keyword

  var obj111={a:1,b:2,c:function(){
    console.log("helo")
  }}     
obj111.c()

var obj222={a:1,b:2,c:function(){
  console.log("this",this)
}}
obj222.c()
var obj333={a:1,b:2,c:function(){
  console.log("variable stored",this)
  
}}
var tt=obj333.c
tt()
var obj444={a:1,b:2,c:()=>{console.log(this)}}
obj444.c()
