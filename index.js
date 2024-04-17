#!/usr/bin/env/node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 2);
const answer = await inquirer.prompt([{
        name: "UserguessedNumber",
        type: "number",
        message: "please Guessed the Number b/w 1 to 10"
    }]);
if (answer.UserguessedNumber === randomnumber) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("sorry you guessed wrong number");
}
