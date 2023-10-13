
// Here we import the function from other js files.

import printHelloWorld from "./script1.js";  //export default
import printNewWorld from "./script2.js";  //export default   
import { printHai,printThanks,printGoodMorning,printWelcome } from "./script1.js";

printHelloWorld();
printHai();
printGoodMorning();
printWelcome();
printThanks();

// from script2
printNewWorld();