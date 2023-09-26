class student{
    Name;
    DOB;
    constructor(name,dob){
        this.Name=name;
        this.DOB=dob;
    }
    dispayName(){
        console.log("Name:",this.Name)

    }
    displayDOB(){
        console.log("DOB:",this.DOB);
    }
    displayage(){
      return  new Date().getFullYear()-this.DOB;
    }
    static printmindob=function(...a){          //using static keywod  //destructuring the objects here."a" is varible name
        let arr=a.map((e)=>{
            return e.DOB;
        })
        console.log("minimum dob:",Math.min(...arr))
        }
}
let obj=new student("REENA P",2000)
obj.dispayName()    // before using constructor it is undefined value
obj.displayDOB()
obj.dispayName()
console.log("age:",obj.displayage())
let obj1=new student("MEENA S",2001);
// student.printmindob=function(...args){
// let arr=args.map((e)=>{
//     return e.DOB;
// })
// console.log("minimum dob:",Math.min(...arr))
// }
student.printmindob(obj,obj1)