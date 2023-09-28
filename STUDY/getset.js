class Button{
    constructor(item){
  this.button=document.createElement('button')
  this.button.innerHTML=item;
  document.body.appendChild(this.button)
  
    }
    set width(width){
      this.button.style.width=width+"px"
    }
    set height(height){
      this.button.style.height=height+"px"
    }
    get width(){
      return parseInt(this.button.style.width)
    }
    get height(){
      return parseInt(this.button.style.height)
    }
}
let Mybutton=new Button("click me")
Mybutton.width=200
Mybutton.height=100
console.log("width",Mybutton.width)
console.log("height",Mybutton.height)


//another eg:

class Paragraph{
  constructor(n){
    this.paragraph=document.createElement("p")
    this.paragraph.innerHTML=n;
    document.body.appendChild(this.paragraph)
  }
  set color(c){
    this.paragraph.style.color=c

  }

  set background(b){
    this.paragraph.style.background=b
  }

}

let Myparagraph=new Paragraph("helo welcome everyone")
Myparagraph.color="red"
Myparagraph.background="yellow"



class GreenButton{
  constructor(item){
this.button=document.createElement('button')
this.button.innerHTML=item;
document.body.appendChild(this.button)

  }
  set width(width){
    this.button.style.width=width+"px"
  }
  set height(height){
    this.button.style.height=height+"px"
  }
  get width(){
    return parseInt(this.button.style.width)
  }
  get height(){
    return parseInt(this.button.style.height)
  }
  onClick(f){
    this.button.onclick=function(){
        this.button.onclick=f
        this.button.style.background="green"
    }.bind(this)
  }
}
let Green=new GreenButton("click me")
Green.width=200
Green.height=100
console.log("width",Green.width)
console.log("height",Green.height)

Green.onClick(function(){
  console.log("button clicked..")
})