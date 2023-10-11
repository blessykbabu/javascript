//callback hell
// const cart=["bottle","watch","Laptop"];
// api.createOrder();
// api.processTopayement();
// api.showOredersummary();
// api.updateWallet();
// //using callback


// api.createOrder(cart,function(){
//     api.processTopayement(function(){
//         api.showOredersummary(function(){
//             api.updateWallet()
//         })
//     })
// })


//code maintainabilty,readability,inversion of control,pyramid of doom



//promises


// let flag=true;
// let a=new Promise(function(resolve,reject){
//   if(flag){
//       resolve("Resolved....")
//   }else{
//       rejected("Rejected....")
//   }
// });
// a
// .then((message)=>{
//   console.log("message",message)
// })  
// .catch((error)=>{
//   console.log("error",eror)
// })  

//using callbacks

// let userLeft=true;
// let userNotplaying=true;
// function game(successCallback,errorCallback){
//   if(userNotplaying==true && userLeft==true){
//     errorCallback("user not playing and user left the game")
//   }else if(userLeft==ture){
//     errorCallback("user left....")
//   }else if(userNotplaying){
//     errorCallback("game paused")
//   }else if(userLeft==false &&userNotplaying==false){
//     successCallback("user playing game.....")
//   }

// }  



// game(function(successMessage){
//   console.log("success message  :",successMessage);
// },function(errorMessage){
//   console.log("error message  :",errorMessage)
// });
                        //somany difficulties in using call back in this way so we use promise to handle this problem.  ----this problem is called callback helll.
                        //one function call back is not call another function the all system is crashh


//using promises

// let userLeft = true;
// let userNotplaying = true;
// function game() {                //here the game function return a promise
//   return new Promise((resolve, reject) => {
//     if (userNotplaying == true && userLeft == true) {
//       reject("user not playing and user left the game")
//     } else if (userLeft == ture) {
//       reject("user left....")
//     } else if (userNotplaying) {
//       reject("game paused")
//     } else if (userLeft == false && userNotplaying == false) {
//       resolve("user playing game.....")
//     }
//   });
// };  

// game()
// .then ((successMessage)=>{         //when the function is resolve then only it call then other time it call catch
//   console.log("success message :  ",successMessage)
// })
// .catch((errorMessage)=>{
//   console.log("error mesage :",errorMessage)
// });



     //-------promise all and promise race ---------------


 let gamePlay1=new Promise((resolve,reject)=>{
  resolve("gamePlay1 resolved.......")
 }) ; 
 
 let gamePlay2=new Promise((resolve,reject)=>{
  resolve("gamePlay2 resolved.......")
 }) ;  

 let gamePlay3=new Promise((resolve,reject)=>{
  resolve("gamePlay3 resolved.......")
 }) ; 
 
 Promise.all([gamePlay1,gamePlay2,gamePlay3])
   .then((message)=>{
    console.log("message : ",message)
   })

   .catch((error)=>{
    console.log("Error : ",error)
   });

 //promise race

//  Promise.race([gamePlay1,gamePlay2,gamePlay3])
//    .then((racemessage)=>{
//     console.log("racemessage : ",racemessage)
//    })

//    .catch((raceerror)=>{
//     console.log("raceError : ",raceerror)
//    });

//               //using somany thens


//    Promise.race([gamePlay1,gamePlay2,gamePlay3])
//    .then((racemessage)=>{
//     console.log("racemessage : ",racemessage)
//     return racemessage+"to1"
//    })
//    .then((racemessage1)=>{
//     console.log("racemessage1 : ",racemessage1)
//    })

//    .catch((raceerror)=>{
//     console.log("raceError : ",raceerror)
//    });

   




