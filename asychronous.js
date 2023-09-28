console.log("start")            //1st start 2nd end 
// setTimeout(()=>{
// console.log("helo")
// },0)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(json => console.log(json))
console.log("end")