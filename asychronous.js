console.log("start")            //1st console start. 2nd  console end then the settimeout 
// setTimeout(()=>{
// console.log("helo")
// },0)

fetch('https://jsonplaceholder.typicode.com/todos/1')  //like above
.then(json => console.log(json))
console.log("end")