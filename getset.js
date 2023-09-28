class Button{
    constructor(name){
        this.button=document.createElement('button')
        this.button.innerHTML=name;
        document.body.appendChild(this.button)

    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get height(){
        return parseInt(this.button.style.height)
    }
    get width(){
        return parseInt(this.button.style.width)
    }
}
let Mybutton=new Button("Click me")

Mybutton.width=300
Mybutton.height=100



//inheritance

class OrangeButton{
    constructor(name){
        this.button=document.createElement('button')
        this.button.innerHTML=name;
        document.body.appendChild(this.button)

    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get height(){
        return parseInt(this.button.style.height)
    }
    get width(){
        return parseInt(this.button.style.width)
    }
    onClick(f){
        this.button.onclick=function(){
            this.button.onclick=f;
            this.button.style.background="orange"
        }.bind(this)
    }
}

let myOrangeButton=new OrangeButton("orange button");
myOrangeButton.onClick(function(){
    console.log("orange button clicked")
})



class OrangeButtn1 extends Button{
    constructor(name){
        super(name);
        this.paragraph =document.createElement('p')
        this.paragraph .innerHTML="helo welcome everyone"
        document.body.appendChild(this.paragraph )
    }
    onClick(fun){
        this.button.onClick=function(){
            this.button.onclick=fun;
            this.button.style.background="red"
        }.bind(this)
    } 
}

let myOrangeButton2=new OrangeButtn1("orange button2");
myOrangeButton2.onClick(function(){
    console.log("orange button2 clicked")
})
