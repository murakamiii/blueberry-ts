import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("num? ", (line) => {
    const num = Number(line);
    if (Number.isNaN(num)) {
        console.log("invalid input");
        rl.close();
        return;
    }
    
    const message = 0 <= num && num < 100 ? `${num} は 0..<100` : "${num} は 0..<100 ではありません";
    console.log(message);
    rl.close();
});