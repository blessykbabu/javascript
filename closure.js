// function outerfunction() {
//   let s = "helo";
//   function innerfunction() {

//     return s;
//   }
//   return innerfunction;
// }
// let result = outerfunction();
// console.log("result:", result);                               //2 functions
// let result1 = result();
// console.log("calling result:", result1);
// let result2 = function innerfunction() {         // why :;;let result2=innerfunction().and declare 'a' inside innerfunction====> becouse innerfuction is inside the outr function
//   return s;
// };
// console.log("result2:", result2);
// console.log("calling result2",result2())

function outerfunction() {
  let a = "welcome";
  function innerfunction() {
    function veryinnerfunction() {
      return a;
    }
    return veryinnerfunction;
  }
  return innerfunction;
}
let result = outerfunction();
console.log("result:", result);
console.log("calling result:", result());
let result1 = function innerfunction() {
  function veryinnerfunction() {
    return a;
  }
  return veryinnerfunction;
};
console.log("result1:", result1);
console.log("calling result1:",result1())

let result2=function veryinnerfunction() {
    return a;
  }
  console.log("result2:",result2)
  console.log("calling result2",result2())         //doubt here