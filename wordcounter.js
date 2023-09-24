import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Typescript Word Counter Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Write a sentence to count the word:"
    }
]);
const words = answer.sentence.split(" ");
console.log(`Please count the words ${words.length}`);
