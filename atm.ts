#!/usr/bin/env node
import inquirer from "inquirer";

let pin = 1234;
let cardNum = 1234;
let amount = 1000; //doller

let getCardNum = await inquirer.prompt([{
    name:"cardpin",
    type:"number",
    message:"Enter your card number"
}])


let getpin = await inquirer.prompt({
    name:"pin",
    type:"number",
    message:"Enter your pin number"
});


if(getpin.pin===pin){
     let operator = await inquirer.prompt([{
        name:"operator",
        type:"list",
        choices:["withdraw","check amount"]
    }]);

    console.log(operator.operator);


    if(operator.operator === "withdraw"){
        let enterAmount = await inquirer.prompt([{
            name:"amount",
            type:"list",
            choices: [100 , 200 , 300 , 400, 500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]
        }]);
    if(amount < enterAmount.amount){
        console.log("You have not sufficent balance");
    }else{

        console.log(`Your remaining amount is : ${amount -= enterAmount.amount}`);
}
    }else{console.log(`Your amount is ${amount}`)}


}else {
    console.log("You entered wrong pin number")};