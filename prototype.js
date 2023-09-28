function Button(name){
this.button=document.createElement('button')
this.button.innerHTML=name;
document.body.appendChild(this.button)
}

Button.prototype.onClick=function(fun){
    this.button.onclick=fun
}
let Mybutton=new Button("Click here")
Mybutton.onClick(function(){
    console.log("Button click")
});



     //inheritance

  function Button1(name){
    Button.call(this,name)
  }   
  Button1.prototype = Object.create(Button.prototype); // this line of code for the access of parent class onclick funtn;; only inherit the constructor not give the access to the parent functions. so we use this line of code

  let Mybutton2=new Button1("click")


Button1.prototype.onClick=function(funtn){       // here we update the child function 
    Button.prototype.onClick.call(this,()=>{
        this.button.style.background='red';
        funtn();
    })
}


  Mybutton2.onClick(function(){
    console.log("click....")
  })