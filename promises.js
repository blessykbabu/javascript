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


//  let gamePlay1=new Promise((resolve,reject)=>{
//   resolve("gamePlay1 resolved.......")
//  }) ; 
 
//  let gamePlay2=new Promise((resolve,reject)=>{
//   resolve("gamePlay2 resolved.......")
//  }) ;  

//  let gamePlay3=new Promise((resolve,reject)=>{
//   resolve("gamePlay3 resolved.......")
//  }) ; 
 
//  Promise.all([gamePlay1,gamePlay2,gamePlay3])
//    .then((message)=>{
//     console.log("message : ",message)
//    })

//    .catch((error)=>{
//     console.log("Error : ",error)
//    });

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

   

                              // promice using maop function

  

// let arr=[1,2,1,3,1,4];
// let result=Promise.all(arr.map((e)=>{
//   return new Promise((resolve,reject)=>{
//     if(e==1){
//       resolve("resolve")
//     }                                         //it just an example.proper eg:payement
//     else{
//       resolve("resolve")
//     }
//   })
// }));

// result
//      .then((message)=>{
//       console.log("message:",message);
//      })
//      .catch((error)=>{
//       console.log("error:",errror);
//      })


            //  async await

   const preMovie=async () =>{
                                          //  try  , catch

        let friendBringTicket=()=>{
          return new Promise((resolve,reject) =>{
            setTimeout(() =>{
              resolve("Here is your ticket")
            },6000);
          })
        }


        let getPopCorn=()=>{
          return new Promise((resolve,reject) =>{
            setTimeout(() =>{
              resolve("Here is your popcorn")
            },4000);
          })
        }


        let getButterOnpopcorn=()=>{
          return new Promise((resolve,reject) =>{
            setTimeout(() =>{
              resolve("Added butter on popcorn")
            },2000);
          })
        }

           let fetchData=await fetch('https://fakestoreapi.com/products')         //this is a fake api example
           let data=await fetchData.json();
           console.log("data :",data);
           console.log("title :",data[1].title);
           console.log("price :",data[1].price);


        let ticket=await friendBringTicket();         //here we give await for this function so it wait for execution.the parent function must give async
        console.log("Ticket: ",ticket)
        let popcorn=await getPopCorn();
        console.log("popcorn:",popcorn)
        let butter=await getButterOnpopcorn();
        console.log("butter:",butter)

   }    
   
   preMovie();
