let s="pathanamthitta"
let at=s.at(0);
console.log("at():",at)
let chart=s.charAt(1);
console.log("chartat():",chart)
console.log("charcodeat:",s.charCodeAt(3)) //get unicode of the charater
console.log("codepoint:",s.codePointAt(0)) //value at the position
let text = String.fromCharCode(72, 69, 76, 76, 79);
console.log("formcharcode",text);
let text2=s.repeat(2);
console.log("repeat",text2)
