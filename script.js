"use strict";

let unit = prompt("What unit of temperature are you converting to, C or F?");
function convertTemp(num, unit) {
    if(unit === "C") {
        // let num = celsius;
        let cToFahr = num * 9 / 5 + 32;
        let message = num+'\xB0C is ' + cToFahr + ' \xB0F.';
        console.log(message)
    } else(unit ==="F") 
        //  let num = fahrenheit;
         let fToCel = (num - 32) * 5 / 9;
         let message = num+'\xB0F is ' + fToCel + '\xB0C.';
         console.log(message)
}
convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(-40, "F"); // > -40