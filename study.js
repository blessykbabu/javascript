
setInterval(function(){
    console.log("setintervel is working")
},1000)                                                


setTimeout(function()
{
    console.log("this is set time out")
},10000)


var obj={name:"praveena",age:22,place:"kochi"}
var obj1={...obj}
console.log("obj",obj)
console.log("after using spread operator obj1",obj1)

 var array=[11,22,33,44]
 var array1=[...array]
 console.log("array",array)
 console.log("after using spread operator array1",array1)
 var max=Math.max(...array);
 console.log("maximum=",max)


 var objects={
    name:"banu",
    age:12,
    place:"kochi"
 }
 var{name,age,place}=objects;
 console.log("after destructuring",name,age,place);