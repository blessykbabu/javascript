function onChange(arg){
    let result=validate(arg.value);  
    let label=document.getElementById("label");
    label.innerHTML=result;  
    return;  
  
}
const exp=[^]
function validate(value){
    console.log("value  :",value)

let isvalid=regex.test(value)
if(isvalid){
    return '';
}
else{
    return "invalid string"
}}