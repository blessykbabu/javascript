     //callback hell
const cart=["bottle","watch","Laptop"];
api.createOrder();
api.processTopayement();
api.showOredersummary();
api.updateWallet();
//using callback


api.createOrder(cart,function(){
    api.processTopayement(function(){
        api.showOredersummary(function(){
            api.updateWallet()
        })
    })
})


//code maintainabilty,readability,inversion of control,pyramid of doom



    //promises


  let flag=true;
  let a=new Promise(function(resolve,reject){
    if(flag){
        resolve("Resolved....")
    }else{
        rejected("Rejected....")
    }
  });
  a
  .then((message)=>{
    console.log("message",message)
  })  
  .catch((error)=>{
    console.log("error",eror)
  })  

    //using callbacks

  let userLeft=true;
  let useNo  