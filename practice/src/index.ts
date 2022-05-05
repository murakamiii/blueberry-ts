const obj: {
    foo: number,
    bar: string
} = {
    foo: 1,
    bar: "str"
};

const obj2 = {
    baz: true,
    ...obj,
    qux: "bye"
};

console.log(obj2);
