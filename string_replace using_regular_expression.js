let str='a-b-c';
console.log("str:",str)
let str1=str.replace(/-/g,':')
console.log("str1:",str1)

let datestr="11-10-23";
console.log("datestr : ",datestr);

let datestr1=datestr.replace(/\d{2}$/,"20");
console.log("datestr1 : ",datestr1)

let datestr2=datestr.replace(/(\d{2})$/,"20$1");
console.log("datestr2 : ",datestr2)

    //lookaheads

    //positive lookahead -(?=)      
    // positive lookbehind - (?<=)
     //negative lookahead -(?!)
    // negative lookbehind - (?<!)
     
        // (?<=-)/d+(?=-)  select in between "-" . 1st condetion behind "-" then take 2 digit  ahead "-" ,that means take the content still "-"


        let example=datestr2.replace(/(?<=-)\d+(?=-)/,"11") //this code for replace "10"
        console.log("example ",example)

        let ex="(91)123456789"
        let ex1=ex.replace(/(?<!\()\d+(?!\))/,"7654321")  
         //here we use negative lookaheads.negative lookaheads select outside the matched ones .in this example "(91)" is match so it take the outside characters that is 123456789
        console.log("ex1: ",ex1)