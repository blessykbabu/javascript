let str="Hello";
// const regexp=/[kjm]/i/      //check there is k or j or m in the string
// const regexp=/[H+]/i        //atleast one "h" in the string
// const regexp=/o$/i         //string end with "o" it 0 or 1 or more
// const regexp=/^h/i
// const regexp=/o?$/i
// const regexp=/o+$/i
// const regexp=/L{2}o$/i         //atleast 2'ls after the string end with "o"
// const regexp=/L{2,4}o$/i
// const regexp=/Hel{2}o$/i
// const regexp=/Hel{2,4}o$/i           //starting with "he",after "he" there must 2 l's then end the string with "o"
// const regexp=/Hel{2,}o$/i           //minimum 2 l's


//  \--escape character

// const regexp=/\d/i           //if any digits it will betrue    eg:"hello2"
// const regexp=/\D/i           //if any non digits it will be true   eg:"123" ----false    eg:"3343k" ----true
// const regexp=/./i            //there is no change it always true .if it present or not.bcoz "." have special meaning so it use with "\"
// const regexp=/\./i              //if there is any "." in string it will be ture
// const result=regexp.test(str)
// console.log("result :  ",result)



// let str1="cat is beautiful good hl fisheg"
// const exp=/cat/i;
// const exp=/[a-z 0-9]at/
// const exp=/^rat/i;
const exp=/good$/i;   // /good$/im/---m check multiple lines using `` for multiple lines.then m-- is used to check the each lines

                     let str1=`helo welcome every one.
                     this is a new page.
                     hope you all doing well`
// const exp=/meats?$/i;
// const exp=/fish(es)?$/i;
// const exp=/fishes*$/i;
// const exp=/fishes+$/i;
// const exp=/fishe.$/i;
const result=exp.test(str1)
console.log("result :",result)