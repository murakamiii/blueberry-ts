import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("数値? ", (line) => {
    const num: number = Number(line);

    if (Number.isNaN(num)) {
        console.log("数値を入力してください");
        rl.close();
        return;
    }
    
    console.log(`${Number(num) + 1000}!`);
    rl.close();
});