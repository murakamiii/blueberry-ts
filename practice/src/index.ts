import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("パスワード? ", (password) => {
    if (password === "password") {
        console.log("ok");
    } else {
        console.log("Wrong password!");
    }

    rl.close();
});