let fb: string = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fb += "FizzBuzz ";
    } else if (i % 3 === 0) {
        fb += "Fizz ";
    } else if (i % 5 === 0) {
        fb += "Buzz ";
    } else {
        fb += `${i} `;
    }
}

console.log(fb);