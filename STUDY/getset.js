class Button{
    constructor(item){
  this.button=document.createElement('button')
  this.button.innerHTML=item;
  document.body.appendChild(this.button)
  
    }
}
let Mybutton=new Button("click me")