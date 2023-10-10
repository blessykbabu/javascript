function onChange(arg){
    let result=validate(arg.value); 
    console.log("Result :  ",result) 
    let label=document.getElementById("label");
    label.style.color="red"
    label.innerHTML=result;  
    return;  
  
}
// const regexp=/^\d{1,2}-\d{1,2}-\d{4}$/i;

const regexp=/^([012]?\d|3[0,1])-([0]\d|1[012])-(\d{4})/i;
function validate(value){
    console.log("value  :",value)

let isvalid=regexp.test(value)
if(isvalid){
    return '';
}
else{
    return "invalid Date"
}}