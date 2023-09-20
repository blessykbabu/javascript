
// setInterval(function(){
//     console.log("setintervel is working")
// },1000)                                                


// setTimeout(function()
// {
//     console.log("this is set time out")
// },10000)


var obj={name:"praveena",age:22,place:"kochi"}
var obj1={...obj}
console.log("obj",obj)
console.log("after using spread operator obj1:",obj1)

 var array=[11,22,33,44]
 var array1=[...array]
 console.log("array",array)
 console.log("after using spread operator array1:",array1)
 var bb=Math.max(array);
 console.log("maximum=",bb)


 var objects={
    name:"banu",
    age:12,
    place:"kochi"
 }
 var{name,age,place}=objects;
 console.log("after destructuring:",name,age,place);

 var ar=[44,33,22,11];
 function my([a,b,c,d]){
    console.log("destructuring using function:",a,b,c,d)
 }
my(ar)

var ob={
    product:"Book",
    price:25,
    quantity:500
}
function myfunction({product,price,quantity}){
    console.log("destructuring using function with object{ }:",{product,price,quantity})
    console.log("destructuring using function with object:",product,price,quantity)
}
myfunction(ob)



var ar4=[{name:"amal",mark:49,place:"malappuram"},{name:"anil",mark:48,place:"ernakulam"},{name:"avin",mark:50,place:"alappuzha"},{name:"akhil",mark:39,place:"kollam"}]
ar4.forEach((items,index)=>{
    console.log("for each array function:",items)
    console.log("for each array function names:",items.name)
})
  //--find---

  var uu=ar4.find((items,index)=>
  {
    return items.name==="anil"
  })
  console.log("find",uu)

  var rr=ar4.find((i,i1)=>{
    return i.mark==39
  })
  console.log("find mark",rr)

  var ty=ar4.find((i,ii)=>{
    return i.place==="ernakulam"
  })
  console.log("find place:",ty)

  var ss=ar4.filter((item,index)=>{
    return item.mark>=39
  })
  console.log("filter:",ss)

  var hy=ar4.reduce((total,i)=>{
    return total+i.mark
  },0)
  console.log("reduce",hy)


  //..this..

  var objh={a:1,b:2,c:function(){
    console.log("helo")
  }}
  objh.c()
  var objk={a:22,b:33,c:function(){
    console.log("this---",this)
  }}
  objk.c()

  var iol={a:1,b:2,c:function(){
    console.log("this+++++",this)
  }}
var yu=iol.c
yu()

var ioll={a:1,b:2,c:()=>{
    console.log("this+  arrow",this)
  }}
ioll.c()