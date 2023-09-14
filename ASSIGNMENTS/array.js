let arr=["apple","orange","banana","grapes"];
console.log("list array",arr);
console.log("flat",arr.flat());
let a=[22,2,1,44,6];
console.log("sort:",a.sort())

let fruit = [arr.length - 1];
console.log("Accessing the Last Array Element",fruit);
//console.log("every",arr.every());
console.log("reverse",arr.reverse());
//console.log("some",arr.some(""));
console.log("unshift",arr.unshift("potato"));
console.log("valueof",arr.valueOf());
//console.log("reduce",arr.reduceRight());
let t=2;
console.log("at()",arr.reverse(t));
let concat=arr.concat(a);
console.log("concat",concat);
let cons=arr.constructor;
console.log("constructor",arr.constructor());
console.log("copy with in",arr.copyWithin(1,2));
let f=arr.entries();
console.log("entries",f);
let inc =arr.includes("day");
console.log("includes",inc);
let result = Array.isArray(arr);
console.log("isarray",result)
let at=arr.at(0);
console.log("at()",at)

