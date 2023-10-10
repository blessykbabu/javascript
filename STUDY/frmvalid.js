function onChange(arg){
    let result=validate(arg.value);  //here get the value of the argument that we give arg.value..arg is argument here
  
    let label=document.getElementById("check");
    label.style.color="red";
    label.innerHTML=result;
    
    return ;
}
const regexp=/^[a-z][a-z 0-9 _ -]*$/i;   //the regular expression is 1
function validate(values){
    
   let isValid=regexp.test(values)
   console.log("result :"  ,isValid)
   
   if(isValid){
    return '';
   }
   else{
    return "Invalid string"
   }
}