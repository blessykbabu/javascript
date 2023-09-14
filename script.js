console.log("Hello , Welcome");
var a = 1;
console.log("a", a);
console.log("a", a);
console.log("a 'b' c");
console.log('b " hai" "helo"');
console.log(`hai veena  welcome to "kochi"`);
console.log(`helo 'good mornning'`);
console.log(`${a}`);
var b;
b = 1;
console.log("b", b);
b = 10;
console.log("b", b);
var b = 1;
console.log("b", b);
b = 20;
console.log("b", b);
// let c;
// console.log("c",c)
// c=1;
// console.log("c",c)
// let c=10;
// console.log("c",c)

// const d;
// console.log("d",d)
const d = 1;
console.log("d", d);
// const d=2;
// console.log("d",d)
let p, q;
p = 1;
q = 2;
console.log("p", p);
console.log("q", q);
let x = 1,
  y = 2;
console.log("x", x);
console.log("y", y);

var f = 1,
  g = 2;
console.log("f", f);
console.log("g", g);

let u, i;
console.log("u", u, "i", i);

let $b = a;
console.log("$b", b);

window.console.log("hai");

console.log("s", s);
//  console.log("v",v)
//  console.log("h",h)
var s = 6;
// let v=3;
// const h=4;

console.log("s", s);
//  console.log("v",v)
//  console.log("h",h)

let z = 2;
console.log("z", z);
let n = "hai";
console.log(n);
let k = true;
console.log(k);
let l = null;
console.log(l);
let o;
console.log(o);
let a1 = 10,
  b1 = 20;
console.log(a1 + b1);
let c1 = true;
let c2 = false;
console.log("check", c1 && c2);
console.log(a1 > b1);
console.log(b1 > a1);
console.log(a1 === b1);
console.log("a1=b1?", a1 == b1);

let w1 = "hai";
let w2 = "hello";
console.log(w1 + w2);

console.log(c1 || c2);

const string1 = "     welcome    ";
console.log("length of the string", string1.length);
const s1 = "uncopyrightable";
console.log("slice", s1.slice(3));
console.log("slice", s1.slice(3, 9));
console.log("slice3", s1.slice(-15, 2));
console.log("slice0", s1.slice(0));

console.log("substring", s1.substring(3));
console.log("substring0", s1.substring(0));
console.log("substring-3", s1.substring(-3));

console.log("sustr", s1.substr(3));
console.log("slice", s1.slice(-9, -3));
console.log(c1 != 0);
console.log("s", string1);
console.log(string1.trim());
console.log(string1.trimEnd());
console.log(string1.trimStart());

let st = "uncopyrightableaddjhkkkkkkkkkkjjjjjjjjjj";
console.log("split", st.split());

let st1 = "uncopyrightablea,ddjhkkkkkkkk,kkjjjjjjjjjj";
console.log("split", st1.split(","));

let st2 = "uncopyrighta*bleaddjhkkkkkkkkkkj,jjjjjjjjj";
let s3 = st2.split("*");
console.log("splitedd", s3);

console.log("join", s3.join("*"));
console.log("replace", string1.replace("we", "ab"));
let n1 = "welcome";
console.log("endswith", n1.endsWith("me"));
console.log("startswith", n1.startsWith("we"));
console.log("startswith", n1.startsWith("ab"));

let word = "uncopyrightable.messages.in.the.documents";
let jo = word.split(".");
console.log("split message", jo);
console.log("joined", jo.join("."));

let arr = ["string", 2, "value", true];
console.log("array", arr);
let arr1 = new Array("apple", "orange", undefined);
console.log("array display", arr1);
console.log("array length", arr.length);
console.log("array join", arr.join());

console.log("array pushed", arr.push("place"));
console.log("array pop", arr.pop());
console.log("array shift", arr.shift());
console.log("array splice", arr.slice(0, 3));
console.log("array index 0", arr[0]);
console.log("array index", arr.indexOf("string"));
console.log("array [index]=value", (arr[3] = 1));

console.log("array splice", arr.splice(0, 3));

//  splice and slice both are same use

//objects
let obj = {
  name: "manu",
  age: 12,
};
console.log("object", obj);

//array of objects
let obj1 = [
  { name: "riya", age: 12 },
  { name: "leena", age: 11 },
];
console.log("array of object", obj1);
console.log("object1", obj.name);
console.log("element in array object:", obj1[0].name);
console.log("element in array objectss:", obj1[1].age);
let ob = { name: "dain", age: 12 };
let result = JSON.stringify(ob);
console.log("json", result);
// type of JSON
let js = JSON.stringify(ob);
console.log("json type", typeof js); //type :string
//re check
let js1 = JSON.parse(js);
console.log("json parse type", typeof js1); // type:object
console.log("json parse", JSON.parse(result));

//conditional operators

//let num1=prompt("enter a number");// prompt used to get from user
//let num2=prompt("enter next number")
let num1 = 10;
let num2 = 20;
if (num1 < num2) {
  console.log("greter");
}
if (num1 > num2) {
  console.log("greater");
}

//if else ladder
if (num1 > num2) {
  console.log("1st condition");
} else if (num1 < num2) {
  console.log("condition2");
} else if ((num1 = num2)) {
  console.log("condition3");
} else num1 < num2;
{
  console.log("else condition");
}

// switxh

// let var1 = prompt("enter number");
// switch (
//   Number(var1) // convert the string in to number
// ) {
//   case 1:
//     console.log("number is 1");
//     break;
//   case 2:
//     console.log("number is 2");
//     break;
//   default:
//     console.log("default");
// }

let var2 = prompt("enter the day");
switch (var2) {
  case "monday":
    console.log("Monday");
    break;
 case "tuesday":
    console.log("Tuesday");
    break;
  default:
    console.log("THERE IS NO VALUE")  
}


