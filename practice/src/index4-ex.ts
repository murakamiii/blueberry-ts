const getFizzBuzzString = (n: number): string => {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return `${n}`;
    }
};

const sequence = (start: number, end: number): number[] => {
    const sequence: number[] = [];
    for (let i = start; i <= end; i++) {
        sequence.push(i);
    }
    return sequence;
};

for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);    
}

function map(array: number[], callback: (n: number) => number): number[] {
    return array.map (callback);
}

const d = [1, 1, 2, 3, 5, 8, 13];

const result = map(d, (x) => x * 10);
console.log(result);

function map2<T, U>(array: T[], callback: (n: T) => U): U[] {
    return array.map (callback);
}

const d2 = [1, -3, -2, 8, 0, -1];

const result2: boolean[] = map2(d2, (x) => x >= 0);
console.log(result2);