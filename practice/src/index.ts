import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});