class customer{    //create class
    Name;
    Customer_id;
    product;
    constructor(name,id,p){
      this.Name=name;
      this.Customer_id=id;
      this.product=p;

    }
    displayproduct(){
        console.log("product:",this.product);
        return this.product;
    }
    display(){
        console.log("customer::","   Name:",this.Name,"   ID:",this.Customer_id,"   Product:",this.product)
    }
    
}

let obj=new customer("Veena",1001,"books")  //create object of the class
obj.displayproduct();
console.log(obj);
obj.display();
let obj1=new customer("Mahesh",1002,"Rice");
obj1.display();

customer.printid=function(...a){
    let arr=a.map((s)=>{
       return s.Customer_id==1001;  //use if condition
    })
    console.log("cumstomer id of veena:",)
}
customer.printid(obj,obj1)
