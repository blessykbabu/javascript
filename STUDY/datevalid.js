function onChange(arg){
    let result=validate(arg.value);
    let label=document.getElementById("label");
    label.style.color="red";
    label.innerHTML=result;
    return ;
}

// const regexp=/^\d{1,2}-\d{1,2}-\d{4}$/i;
const regexp=/^([012]\d|3[01])-([0]\d|1[012])-\d{4}/
function validate(values){
    let isValid=regexp.test(values);
    if(isValid){
        return '';
    }
    else{
        return "invalid date format"
    }
}