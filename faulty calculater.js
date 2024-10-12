/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

function faultycalculater(num1, num2, operation) {
    // Generate a random number to simulate 10% chance of fault
    let randomChance = Math.random();
    console.log(randomChance)

    //Perform correct or faulty opration based on random chance
    if (randomChance < 0.1) {
        //Give wrong result happen only 10%
        switch (operation) {
            case '+':
                console.log("faulty operation: + turned into -")
                return num1 - num2;

            case '*':
                console.log("faulty operation: * turned into +")
                return num1 + num2;

            case '-':
                console.log("faulty operation: - turned into /")
                return num1 / num2;

            case '/':
                console.log("faulty operation: / turned into **")
                return num1 ** num2;

            default:
                console.log("Invalid oprator!");
               return null;
        }
    }
    else { 
        // Give write result happen most of the time
        switch (operation) {
            case '+':
                return num1 + num2

            case '*':
                return num1 * num2

            case '-':
                return num1 - num2

            case '/':
                return num1 / num2


            default:
                console.log("Invalaid oprator");
                return null;
        }
    }

}
//for input from user
let num1 = parseFloat(prompt("Enter First Number"));
let num2 = parseFloat(prompt("Enter Second Number"));
let operation = prompt("Enter oprator from : +, -, *, /");

/* test cases
 let num1 = 2;
 let num2 = 4;
 let operation = "*";  */  

let result = faultycalculater(num1, num2, operation);
console.log("Result : " + result);