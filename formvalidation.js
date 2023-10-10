let regex=/^[a-z][a-z 0-9 _]*$/i;       //here we give the regular expression.1st letter must albhabet.remaining items condition in second bracket
function onChange(arg){
    let result=validate(arg.value);  //get the value of the key  .then here call the validate function
    let label=document.getElementById("label");
    label.innerHTML=result;  
    return;  // this return is for outside from validate function
  
}
function validate(value){
    console.log("value  :",value)

let isvalid=regex.test(value)
if(isvalid){
    return '';
}
else{
    return "invalid string"
}}