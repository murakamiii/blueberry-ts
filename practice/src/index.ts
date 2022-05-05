type FooBar = {
    foo: number;
    bar: string;
}
const obj: FooBar = {
    foo: 1,
    bar: "str"
};

const obj2 = {
    baz: true,
    ...obj,
    qux: "bye"
};

console.log(obj2);
