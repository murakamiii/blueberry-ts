const obj = {
    foo: 123,
    bar: "hi"
};

const obj2 = {
    baz: true,
    ...obj,
    qux: "bye"
};

console.log(obj2);
